import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const Panel: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`p-5 bg-white rounded-lg ${className}`}>{children}</div>
  );
};

export default Panel;
