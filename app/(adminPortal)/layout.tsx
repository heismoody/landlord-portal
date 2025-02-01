import React, { Children } from "react";
import SideBarList from "./components/sideBarList";
import { ISideBarList } from "./components/types";

interface props {
  children: React.ReactNode;
}

const PortalLayout = ({ children }: props) => {
  const lists : ISideBarList[] = [
    {
      id: 1,
      name: "Dashibodi",
      route: "/"
    },
    {
      id: 2,
      name: "Nyumba",
      route: "/nyumba"
    },
    {
      id: 3,
      name: "Wapangaji",
      route: "/wapangaji"
    },
    {
      id: 4,
      name: "Malipo",
    },
  ];
  return (
    <div className="flex w-full bg-primary dark:bg-darkPrimary">
      <div className="h-screen w-[15%] flex flex-col items-center space-y-8 py-12 border-r border-white/10">
        <svg
          width="81"
          height="24"
          viewBox="0 0 81 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.8398 7.37476L43.4578 0H23.9814L39.9196 15.925L50.8398 7.37476Z"
            fill="#5CBAF7"
          />
          <path
            d="M39.92 15.925L23.9819 0L0 23.9608H7.47464L23.9819 7.46805L35.729 19.2056L39.92 15.925Z"
            fill="#45A9EA"
          />
          <path
            d="M80.9481 23.9605L63.4998 6.52759H44.0227L61.471 23.9605H80.9481Z"
            fill="#73C5FB"
          />
          <path
            d="M34.0487 23.9605L44.0223 13.9957L53.9959 23.9605H61.4705L44.0223 6.52759L26.574 23.9605H34.0487Z"
            fill="#45A9EA"
          />
        </svg>
        <SideBarList lists={lists} />
      </div>
      <div className="w-[85%]">
        <div className="flex justify-end w-[97%]">
          <div className="flex items-center gap-2 pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <div className="flex flex-col">
              <span className="font-bold ">Mwenye Nyumba</span>
              <span className="text-black/40 text-base">MwenyeNyumba</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PortalLayout;
