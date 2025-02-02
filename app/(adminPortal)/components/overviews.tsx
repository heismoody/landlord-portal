"use client";
import React, { useState } from "react";
import { IDashboardOverview } from "./types";

interface props {
  overviews: IDashboardOverview[];
}

const OverviewButton: React.FC<props> = ({ overviews }) => {
  return (
    <>
      {overviews.map((overview, index) => (
        <div className=" bg-primary dark:bg-darkPrimary flex flex-col  p-8 rounded-lg w-full">
          <span className="font-semibold">{overview.name}</span>
          <span className="text-xl font-bold">{overview.number}</span>
        </div>
      ))}
    </>
  );
};

export default OverviewButton;
