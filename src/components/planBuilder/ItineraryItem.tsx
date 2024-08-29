import React, { useContext, useEffect, useState } from "react";
import { TravelListItem } from "../../models/TravelListItem";
import { TravelListContext } from "../providers/TravelListProvider";
import Button from "../utils/Button";
import ItineraryItemDetails from "./ItineraryItemDetails";
import { CountrySearchResult } from "../../models/CountrySearchResult";
import axios from "axios";

interface Props {
  order: number;
  item: TravelListItem;
}

const ItineraryItem: React.FC<Props> = ({ item, order }) => {
  const { removeItem } = useContext(TravelListContext);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [country, setCountry] = useState<CountrySearchResult | null>(null);

  useEffect(() => {
    const fetchCountry = async (name: string) => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
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

    if (country == null) {
      fetchCountry(item.name);
    }
  }, [item, country]);

  return (
    <li
      key={item.uuid}
      className="rounded-md hover:bg-gray-200 pl-3 pr-1 py-1 border mb-1 flex flex-col"
    >
      <div className="flex justify-between items-center">
        <span className="flex items-center font-bold">
          <span className="rounded-md min-w-8 p-1 bg-slate-700 text-white font-bold text-xs flex items-center justify-center mr-3">
            {order}
          </span>
          {item.name}
        </span>
        <span>
          <Button onClick={() => setExpanded(!expanded)} className="mr-1">
            {expanded ? "Hide" : "More"}
          </Button>
          <Button onClick={() => removeItem(item)}>Remove</Button>
        </span>
      </div>

      {expanded && <ItineraryItemDetails country={country} />}
    </li>
  );
};

export default ItineraryItem;
