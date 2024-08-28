import React, { useContext, useState } from "react";
import { TravelListItem } from "../../models/TravelListItem";
import { TravelListContext } from "../providers/TravelListProvider";
import Button from "../utils/Button";
import ItineraryItemDetails from "./ItineraryItemDetails";

interface Props {
  order: number;
  item: TravelListItem;
}

const ItineraryItem: React.FC<Props> = ({ item, order }) => {
  const { removeItem } = useContext(TravelListContext);
  const [expanded, setExpanded] = useState<boolean>(false);

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

      {expanded && <ItineraryItemDetails item={item} />}
    </li>
  );
};

export default ItineraryItem;
