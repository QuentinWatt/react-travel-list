import React, { useContext } from "react";
import { TravelListContext } from "../providers/TravelListProvider";
import Panel from "../utils/Panel";

const Itinerary: React.FC = () => {
  const { list } = useContext(TravelListContext);

  return (
    <div className="container mx-auto px-3">
      <Panel>
        <h2 className="font-bold">Your List</h2>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </Panel>
    </div>
  );
};

export default Itinerary;
