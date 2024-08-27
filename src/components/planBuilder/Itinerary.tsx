import React, { useContext } from "react";
import { TravelListContext } from "../providers/TravelListProvider";
import Panel from "../utils/Panel";
import ItineraryItem from "./ItineraryItem";

const Itinerary: React.FC = () => {
  const { list } = useContext(TravelListContext);

  return (
    <div className="container mx-auto px-3">
      <Panel>
        <h2 className="font-bold mb-3">Your Travel Itinerary</h2>
        <ul>
          {list.map((item, index) => (
            <ItineraryItem key={item.uuid} item={item} order={index + 1} />
          ))}
        </ul>
      </Panel>
    </div>
  );
};

export default Itinerary;
