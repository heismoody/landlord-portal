import React from "react";
import { IHeadList } from "./types";

interface props {
  headList: IHeadList[];
}

const TableHead: React.FC<props> = ({ headList }) => {
  return (
    <>
      {headList.map((list, index) => (
        <td className="font-bold p-2" key={index}>{list.name}</td>
      ))}
    </>
  );
};

export default TableHead;
