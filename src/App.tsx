import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col justify-between">
      <Navigation />

      <Footer />
    </div>
  );
}
