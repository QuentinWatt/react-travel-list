import React, { useContext } from "react";
import { TravelListItem } from "../../models/TravelListItem";
import { TravelListContext } from "../providers/TravelListProvider";

interface Props {
  item: TravelListItem;
}

const ItineraryItem: React.FC<Props> = ({ item }) => {
  const { removeItem } = useContext(TravelListContext);

  return (
    <li
      key={item.uuid}
      className="rounded-md hover:bg-gray-200 flex justify-between items-center pl-3 pr-1 py-1"
    >
      {item.name}
      <button
        onClick={() => removeItem(item)}
        className="rounded text-xs bg-slate-900 hover:bg-blue-600 text-white p-2 duration-200"
      >
        Remove
      </button>
    </li>
  );
};

export default ItineraryItem;
