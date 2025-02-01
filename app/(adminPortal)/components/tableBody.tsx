import React from "react";

interface props {
  children: React.ReactNode;
}

const TableBody: React.FC<props> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
