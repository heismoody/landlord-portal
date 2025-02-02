"use client";
import React, { useState } from "react";
import { ISideBarList } from "./types";
import Link from "next/link";

interface props {
  lists: ISideBarList[];
}

const SideBarList: React.FC<props> = ({ lists }) => {
  const [active, setActive] = useState(1);
  return (
    <ul className="w-full font-bold">
      {lists.map((list, index) => (
        <Link href={list.route != undefined ? list.route : ""}>
          <li
            className={`${
              active == index + 1
                ? "bg-secondary dark:bg-darkSecondary text-primary"
                : "hover:bg-secondary hover:text-primary hover:dark:bg-darkSecondary"
            }  m-2 px-20 py-2 rounded cursor-pointer`}
            onClick={() => setActive(index + 1)}
          >
            {list.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SideBarList;
