import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MenuProvider from "./components/providers/MenuProvider";
import Navigation from "./components/header/Navigation";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col justify-between">
      <div>
        <MenuProvider>
          <Header />
          <Navigation />
        </MenuProvider>

        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
