import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DropdownOverlay: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 bg-white w-full z-50 p-3 rounded shadow-md overflow-scroll max-h-60">
        {children}
      </div>
    </div>
  );
};

export default DropdownOverlay;
