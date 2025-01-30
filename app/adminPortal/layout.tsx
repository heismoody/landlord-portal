import React, { Children } from "react";

interface props {
  children: React.ReactNode;
}

const PortalLayout = ({ children }: props) => {
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
        <ul className="w-full">
          <li className="bg-secondary dark:bg-darkSecondary m-2 px-20 py-1 rounded cursor-pointer">Dashbodi</li>
          <li className="m-2 px-20 py-1 rounded cursor-pointer">Nyumba</li>
          <li className=" m-2 px-20 py-1 rounded cursor-pointer">Wapangi</li>
          <li className=" m-2 px-20 py-1 rounded cursor-pointer">Malipo</li>
        </ul>
      </div>
      <div className="w-[85%]">
        {children}
      </div>
    </div>
  );
};

export default PortalLayout;
