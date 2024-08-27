import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Panel from "../utils/Panel";
import { CountrySearchResult } from "../../models/CountrySearchOption";
import DropdownOverlay from "../utils/DropdownOverlay";
import { TravelListContext } from "../providers/TravelListProvider";

const CountrySearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [countries, setCountries] = useState<CountrySearchResult[]>([]);
  const [error, setError] = useState<string>("");
  const { addItem } = useContext(TravelListContext);

  useEffect(() => {
    const fetchOptions = async () => {
      setError("");
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        setCountries(response.data);
      } catch (error) {
        setCountries([]);
        setError("No results found");
      }
    };

    if (name.length > 0) {
      fetchOptions();
    } else {
      setCountries([]);
    }
  }, [name]);

  const selectOption = (country: CountrySearchResult) => {
    addItem({
      uuid: crypto.randomUUID(),
      name: country.name.common,
    });
    setName("");
  };

  return (
    <div className="container mx-auto px-3 mb-6">
      <Panel className="mb-3">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col">
            <label htmlFor="search" className="font-bold text-sm">
              Search
            </label>
            <input
              id="search"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border px-3 py-2 rounded bg-gray-200"
              placeholder="Search by country name"
            />

            {countries.length > 0 && (
              <DropdownOverlay>
                <ul>
                  {countries.map((country, index) => (
                    <li
                      key={index}
                      className="p-3 hover:bg-gray-200 flex rounded-md"
                      onClick={() => selectOption(country)}
                    >
                      {country.name.common}
                    </li>
                  ))}
                </ul>
              </DropdownOverlay>
            )}

            {error.length > 0 && <DropdownOverlay>{error}</DropdownOverlay>}
          </div>
        </form>
      </Panel>
    </div>
  );
};

export default CountrySearch;
