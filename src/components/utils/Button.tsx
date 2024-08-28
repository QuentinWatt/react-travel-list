import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="rounded text-xs bg-slate-900 hover:bg-blue-600 text-white p-2 duration-200 hover:cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
