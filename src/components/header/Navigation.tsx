import React, { useContext } from "react";
import { MenuContext } from "../providers/MenuProvider";
import CloseIcon from "../icons/CloseIcon";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const { isOpen, closeMenu } = useContext(MenuContext);

  return (
    <>
      {isOpen ? (
        <div className="absolute top-0 right-0 h-screen bg-slate-900 py-10 px-5 text-white min-w-64 shadow-lg">
          <span className="absolute right-3 top-3">
            <CloseIcon onClick={closeMenu} />
          </span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navigation;
