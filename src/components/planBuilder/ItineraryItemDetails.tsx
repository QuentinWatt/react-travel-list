import React from "react";
import { CountrySearchResult } from "../../models/CountrySearchResult";

interface Props {
  country: CountrySearchResult | null;
}

const ItineraryItemDetails: React.FC<Props> = ({ country }) => {
  return (
    <div
      data-testid="itinerary-details-wrapper"
      className="pb-3 border-t border-gray-400 mt-2"
    >
      {country != null && (
        <div>
          <div>
            <h3 className="font-bold">Capital:</h3>
            <p className="flex">{country.capital?.join(", ")}</p>
          </div>

          {country.currencies && (
            <div className="mt-2">
              <h3 className="font-bold">Currency:</h3>
              {Object.values(country.currencies).map((currency) => (
                <div key={currency?.symbol}>
                  {currency?.symbol} {currency?.name}
                </div>
              ))}
            </div>
          )}

          {country.flags && (
            <div className="w-24 mt-2">
              <h3 className="font-bold">Flag:</h3>
              <img src={`${country.flags?.png}`} alt={country.flags?.alt} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItineraryItemDetails;
