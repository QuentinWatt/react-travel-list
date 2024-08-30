import React, { useContext } from "react";
import Logo from "./Logo";
import { MenuContext } from "../providers/MenuProvider";
import MenuIcon from "../icons/MenuIcon";

const Header: React.FC = () => {
  const { openMenu } = useContext(MenuContext);

  return (
    <nav className="bg-slate-800 py-3 text-white">
      <div className="container mx-auto px-3 flex items-center justify-between">
        <Logo />

        <MenuIcon onClick={openMenu} />
      </div>
    </nav>
  );
};

export default Header;
