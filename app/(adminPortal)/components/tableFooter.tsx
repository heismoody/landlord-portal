import React from "react";

const TableFooter = () => {
  return (
    <div className="py-2 mt-8 mx-6 bg-ternary dark:bg-darkSecondary flex gap-3 px-5 rounded-xl justify-between">
      <div className=" flex items-center px-4 font-bold">1 of 3</div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2 text-secondary bg-primary dark:bg-darkPrimary w-fit rounded-xl border-[1px] border-black/10 p-2">
          <span className="text-secondary">1</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 stroke-secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2 text-secondary bg-primary dark:bg-darkPrimary w-fit rounded-xl border-[1px] border-black/10 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 stroke-black/30 dark:stroke-primary/30"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2 text-secondary bg-primary dark:bg-darkPrimary w-fit rounded-xl border-[1px] border-black/10 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TableFooter;
