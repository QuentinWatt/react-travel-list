import React, { useEffect, useState } from "react";
import axios from "axios";
import Panel from "../utils/Panel";
import { CountrySearchResult } from "../../models/CountrySearchOption";

const CountrySearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [countries, setCountries] = useState<CountrySearchResult[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchOptions = async () => {
      setError("");
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}?fields=name`
        );
        setCountries(response.data);
      } catch (error) {
        console.log(error);
        setCountries([]);
        setError("There was an error");
      }
    };

    if (name.length > 0) {
      fetchOptions();
    } else {
      setCountries([]);
    }
  }, [name]);

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
          </div>
        </form>

        {countries.length > 0 && (
          <ul>
            {countries.map((country, index) => (
              <li key={index}>{country.name.common}</li>
            ))}
          </ul>
        )}

        {error.length > 0 && <div>{error}</div>}
      </Panel>
    </div>
  );
};

export default CountrySearch;
