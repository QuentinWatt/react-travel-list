import React from "react";
import IconProps from "./IconProps";

const MenuIcon: React.FC<IconProps> = ({
  height = 24,
  width = 24,
  className = "",
  onClick = () => {},
}) => {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`fill-current ${className}`}
      onClick={onClick}
    >
      <path
        d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default MenuIcon;
