import React from "react";
import TableFooter from "../components/tableFooter";
import Table from "../components/table";
import TableSearchBar from "../components/tableSearchBar";
import TableSort from "../components/tableSort";
import TableTaarifa from "../components/tableTaarifa";

const Nyumba = () => {
  const headlist = [
    { id: 1, name: "Namba ya chumba" },
    { id: 2, name: "Nyumba" },
    { id: 3, name: "Eneo Ilipo" },
    { id: 4, name: "Wakazi" },
    { id: 5, name: "" },
  ];
  return (
    <>
      <div className="pt-10 pb-4 border-b border-white/10 w-full px-10 shadow-sm">
        <span className="text-xl font-bold">Vyumba</span>
      </div>
      <div className="bg-ternary dark:bg-darkSecondary py-8">
        <div className="rounded-t-2xl mx-16 bg-primary dark:bg-darkPrimary py-8">
          <div className="flex justify-end px-10 ">
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
            <TableSearchBar placeholder="Tafta Chumba"/>
            <TableSort />
            <TableTaarifa />
          </div>
          <div className="flex justify-center">
            <Table headList={headlist}>
              <tr className="odd:bg-ternary odd:dark:bg-darkSecondary">
                <td className="py-3 pl-2">Chumba 1</td>
                <td>Nyumba 1</td>
                <td>Dar es Salaam</td>
                <td>2</td>
                <td>
                  <span className="border border-secondary text-secondary py-[6px] cursor-pointer px-4 rounded-full ">
                    View
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-ternary odd:dark:bg-darkSecondary">
                <td className="py-3 pl-2">Chumba 2</td>
                <td>Nyumba 1</td>
                <td>Dar es Salaam</td>
                <td>1</td>
                <td>
                  <span className="border border-secondary text-secondary py-[6px] cursor-pointer px-4 rounded-full ">
                    View
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-ternary odd:dark:bg-darkSecondary">
                <td className="py-3 pl-2">Chumba 3</td>
                <td>Nyumba 1</td>
                <td>Dar es Salaam</td>
                <td>1</td>
                <td>
                  <span className="border border-secondary text-secondary py-[6px] cursor-pointer px-4 rounded-full ">
                    View
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-ternary odd:dark:bg-darkSecondary">
                <td className="py-3 pl-2">Chumba 1</td>
                <td>Nyumba 1</td>
                <td>Dar es Salaam</td>
                <td>2</td>
                <td>
                  <span className="border border-secondary text-secondary py-[6px] cursor-pointer px-4 rounded-full ">
                    View
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-ternary odd:dark:bg-darkSecondary">
                <td className="py-3 pl-2">Chumba 2</td>
                <td>Nyumba 2</td>
                <td>Dar es Salaam</td>
                <td>2</td>
                <td>
                  <span className="border border-secondary text-secondary py-[6px] cursor-pointer px-4 rounded-full ">
                    View
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-ternary odd:dark:bg-darkSecondary">
                <td className="py-3 pl-2">Chumba 3</td>
                <td>Nyumba 1</td>
                <td>Dar es Salaam</td>
                <td>2</td>
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

export default Nyumba;
