import React from "react";
import Logo from "./Logo";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-slate-800 py-3 text-white">
      <div className="container mx-auto px-3 flex items-center justify-between">
        <Logo />

        <ul className="flex items-center">
          <li>Home</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
