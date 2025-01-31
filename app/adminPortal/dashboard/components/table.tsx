import React from "react";
import TableHead from "./tableHead";
import TableBody from "./tableBody";
import { IHeadList } from "./types";

interface props {
  headList: IHeadList[];
  children: React.ReactNode;
}

const Table: React.FC<props> = ({ headList, children }) => {
  return (
    <table className="w-[95%]">
      <thead>
        <tr>
          <TableHead headList={headList} />
        </tr>
      </thead>
      <TableBody>{children}</TableBody>
    </table>
  );
};

export default Table;
