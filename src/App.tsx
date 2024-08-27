import Footer from "./components/footer/Footer";
import Itinerary from "./components/planBuilder/Itinerary";
import Navigation from "./components/navigation/Navigation";
import TravelListProvider from "./components/providers/TravelListProvider";
import CountrySearch from "./components/planBuilder/CountrySearchResult";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col justify-between">
      <div>
        <Navigation />
        <div className="my-6">
          <TravelListProvider>
            <CountrySearch />
            <Itinerary />
          </TravelListProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
}
