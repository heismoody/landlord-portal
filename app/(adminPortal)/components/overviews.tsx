'use client'
import React, { useState } from "react";
import { IDashboardOverview } from "./types";

interface props {
  overviews: IDashboardOverview[];
}

const OverviewButton: React.FC<props> = ({ overviews }) => {
  const [active, setActive] = useState(1);
  return (
    <>
      {overviews.map((overview, index) => (
        <div
          className={`${active == index+1 ? "bg-secondary dark:bg-darkSecondary text-primary" : "hover:text-primary hover:bg-secondary"} bg-primary flex flex-col  p-8 rounded-lg w-full`}
          onClick={() => setActive(index + 1)}
        >
          <span className="font-semibold">{overview.name}</span>
          <span className="text-xl font-bold">{overview.number}</span>
        </div>
      ))}
    </>
  );
};

export default OverviewButton;
