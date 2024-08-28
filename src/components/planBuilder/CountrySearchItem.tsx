import React, { useContext } from "react";
import { CountrySearchResult } from "../../models/CountrySearchResult";
import { TravelListContext } from "../providers/TravelListProvider";
import Button from "../utils/Button";

interface Props {
  country: CountrySearchResult;
  onSelected?: Function;
}

const CountrySearchItem: React.FC<Props> = ({
  country,
  onSelected = () => {},
}) => {
  const { addItem } = useContext(TravelListContext);

  const selectOption = (country: CountrySearchResult) => {
    addItem({
      uuid: crypto.randomUUID(),
      name: country.name.common,
    });
    onSelected();
  };

  return (
    <li
      className="pl-3 pr-1 py-1 hover:bg-gray-200 flex rounded-md border mb-1 justify-between items-center hover:cursor-pointer"
      onClick={(e) => selectOption(country)}
    >
      {country.name.common}
      <Button
        onClick={(e) => {
          e.stopPropagation();
          selectOption(country);
        }}
      >
        Add
      </Button>
    </li>
  );
};

export default CountrySearchItem;
