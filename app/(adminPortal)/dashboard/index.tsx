import React from "react";
import OverviewButton from "../components/overviews";
import Table from "../components/table";
import TableSearchBar from "../components/tableSearchBar";
import TableSort from "../components/tableSort";
import TableTaarifa from "../components/tableTaarifa";
import TableFooter from "../components/tableFooter";

const Dashboard = () => {
  const overviews = [
    {
      id: 1,
      name: "Nyumba",
      number: 3,
    },
    {
      id: 2,
      name: "Vyumba",
      number: 85,
    },
    {
      id: 3,
      name: "Wakazi",
      number: 100,
    },
    {
      id: 4,
      name: "Mapato",
      number: 2500000,
    },
  ];
  const headlist = [
    { id: 1, name: "Jina" },
    { id: 2, name: "Eneo Lilipo" },
    { id: 3, name: "Vyumba" },
    { id: 4, name: "Wapangaji" },
    { id: 5, name: "" },
  ];
  return (
    <>
      <div className="pt-10 pb-2 border-b border-white/10 w-full px-10 shadow-sm dark:bg-darkSecondary">
        <span className="text-xl font-bold">DASHIBODI</span>
      </div>
      <div className="bg-ternary dark:bg-darkSecondary">
        <div className="flex justify-between px-14 gap-x-5 py-8">
          <OverviewButton overviews={overviews} />
        </div>
        <div className="rounded-t-2xl mx-16 bg-primary dark:bg-darkPrimary py-8">
          <div className="flex justify-between px-10 ">
            <span className="font-bold">Nyumba</span>
            <div className="bg-secondary w-fit rounded-full p-1 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6 stroke-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <div className="py-3 bg-ternary dark:bg-darkSecondary m-5 flex gap-3 px-5 rounded-xl">
            <TableSearchBar placeholder="Tafta Nyumba"/>
            <TableSort />
            <TableTaarifa />
          </div>
          <div className="flex justify-center">
            <Table headList={headlist}>
              <tr className="odd:bg-ternary odd:dark:bg-darkSecondary">
                <td className="py-3 pl-2">Nyumba 1</td>
                <td>Dar es Salaam</td>
                <td>40</td>
                <td>55</td>
                <td>
                  <span className="border border-secondary text-secondary py-[6px] cursor-pointer px-4 rounded-full ">
                    View
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-ternary odd:dark:bg-darkSecondary">
                <td className="py-3 pl-2">Nyumba 2</td>
                <td>Dar es Salaam</td>
                <td>40</td>
                <td>55</td>
                <td>
                  <span className="border border-secondary text-secondary py-[6px] cursor-pointer px-4 rounded-full ">
                    View
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-ternary odd:dark:bg-darkSecondary">
                <td className="py-3 pl-2">Nyumba 3</td>
                <td>Dar es Salaam</td>
                <td>40</td>
                <td>55</td>
                <td>
                  <span className="border border-secondary text-secondary py-[6px] cursor-pointer px-4 rounded-full ">
                    View
                  </span>
                </td>
              </tr>
            </Table>
          </div>
          <TableFooter />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
