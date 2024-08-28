import axios from "axios";
import React, { useEffect, useState } from "react";
import { TravelListItem } from "../../models/TravelListItem";
import { CountrySearchResult } from "../../models/CountrySearchResult";

interface Props {
  item: TravelListItem;
}

const ItineraryItemDetails: React.FC<Props> = ({ item }) => {
  const [country, setCountry] = useState<CountrySearchResult | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${item.name}`
        );
        const { flags, currencies, capital } = response.data[0];
        setCountry({
          name: response.data[0].name.common,
          flags,
          currencies,
          capital,
        });
      } catch {
        setCountry(null);
      }
    };

    fetchCountry();
  }, [item]);

  return (
    <div className="pb-3">
      {country != null && (
        <div>
          <div>
            <h3 className="font-bold mb-1">Capital:</h3>
            <p className="flex">{country.capital?.join(", ")}</p>
          </div>

          {country.currencies && (
            <div className="mt-2">
              <h3 className="font-bold mb-1">Currency:</h3>
              {Object.values(country.currencies).map((currency) => (
                <span>
                  {currency?.symbol} {currency?.name}
                </span>
              ))}
            </div>
          )}

          <div className="w-24 mt-2">
            <h3 className="font-bold mb-1">Flag:</h3>
            <img src={`${country.flags?.png}`} alt={country.flags?.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItineraryItemDetails;
