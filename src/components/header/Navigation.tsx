import React, { useContext } from "react";
import { MenuContext } from "../providers/MenuProvider";
import CloseIcon from "../icons/CloseIcon";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const { isOpen, closeMenu } = useContext(MenuContext);

  return (
    <>
      {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      <div className={`navigation ${isOpen ? "open" : ""}`}>
        <span className="absolute right-3 top-3">
          <CloseIcon onClick={closeMenu} />
        </span>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
