import Footer from "./components/footer/Footer";
import Itinerary from "./components/planBuilder/Itinerary";
import Navigation from "./components/navigation/Navigation";
import TravelListProvider from "./components/providers/TravelListProvider";
import CountrySearch from "./components/planBuilder/CountrySearch";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col justify-between">
      <div>
        <Navigation />
        <div className="my-6 container mx-auto">
          <TravelListProvider>
            <div className="flex flex-col md:flex-row">
              <CountrySearch />
              <Itinerary />
            </div>
          </TravelListProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
}
