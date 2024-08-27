import React, { useContext } from "react";
import { TravelListItem } from "../../models/TravelListItem";
import { TravelListContext } from "../providers/TravelListProvider";
import Button from "../../models/Button";

interface Props {
  order?: number;
  item: TravelListItem;
}

const ItineraryItem: React.FC<Props> = ({ item, order }) => {
  const { removeItem } = useContext(TravelListContext);

  return (
    <li
      key={item.uuid}
      className="rounded-md hover:bg-gray-200 flex justify-between items-center pl-3 pr-1 py-1 border mb-1"
    >
      <span className="flex items-center">
        {order !== undefined && (
          <span className="rounded-md min-w-8 p-1 bg-slate-700 text-white font-bold text-xs flex items-center justify-center mr-3">
            {order}
          </span>
        )}
        {item.name}
      </span>
      <Button onClick={() => removeItem(item)}>Remove</Button>
    </li>
  );
};

export default ItineraryItem;
