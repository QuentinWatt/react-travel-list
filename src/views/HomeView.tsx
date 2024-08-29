import React from "react";
import TravelListProvider from "../components/providers/TravelListProvider";
import CountrySearch from "../components/planBuilder/CountrySearch";
import Itinerary from "../components/planBuilder/Itinerary";

const HomeView: React.FC = () => {
  return (
    <div className="my-6 container mx-auto">
      <TravelListProvider>
        <div className="flex flex-col md:flex-row">
          <CountrySearch />
          <Itinerary />
        </div>
      </TravelListProvider>
    </div>
  );
};

export default HomeView;
