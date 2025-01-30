import React from "react";
import OverviewButton from "./components/overviews";

const Dashboard = () => {
  return (
    <>
      <div className="pt-[89px] border-b border-white/10 w-full px-10 shadow-sm">
        <span>DASHIBODI</span>
      </div>
      <div className="bg-ternary">
        <div className="flex justify-between px-14 gap-x-5 py-8">
          <OverviewButton />
          <OverviewButton />
          <OverviewButton />
          <OverviewButton />
        </div>
        <div className="rounded-2xl mx-16 bg-primary dark:bg-darkPrimary py-8">
          <div className="flex justify-between px-10 ">
            <span className="font-bold">Nyumba</span>
            <div className="bg-secondary w-fit rounded-full p-1">
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
          <div className="py-3 bg-ternary m-5 flex gap-3 px-5 rounded-xl">
            <div className="rounded-xl bg-primary flex items-center gap-4 px-4 font-bold border-[1px] border-black/10 w-[85%]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5525 15.1072L14.2384 14.7931L13.8894 15.0681C12.9299 15.8243 11.8034 16.34 10.6039 16.5723C9.40444 16.8046 8.16682 16.7468 6.99428 16.4035C5.82175 16.0602 4.74831 15.4416 3.86352 14.5991C2.97872 13.7566 2.30824 12.7148 1.908 11.5605C1.50776 10.4062 1.38937 9.17299 1.5627 7.96366C1.73604 6.75432 2.19608 5.60397 2.90444 4.60857C3.6128 3.61318 4.54894 2.8016 5.63476 2.24157C6.72058 1.68153 7.92459 1.38926 9.14634 1.38916C10.5849 1.38906 11.9945 1.79396 13.2137 2.55752C14.4329 3.32108 15.4125 4.41245 16.0403 5.70672C16.6682 7.00099 16.919 8.44588 16.764 9.87603C16.6091 11.3062 16.0546 12.6638 15.164 13.7935L14.8889 14.1425L15.2031 14.4566L18.7061 17.9595C18.7884 18.046 18.8339 18.1612 18.8329 18.2807C18.8318 18.4013 18.7834 18.5167 18.6981 18.6021C18.6128 18.6874 18.4974 18.7358 18.3767 18.7368C18.2572 18.7379 18.142 18.6924 18.0555 18.6101L14.5525 15.1072ZM4.37943 4.28393C3.11518 5.54814 2.40493 7.26278 2.40493 9.05064C2.40493 10.8385 3.11518 12.5531 4.37943 13.8174C5.64369 15.0816 7.35838 15.7918 9.1463 15.7918C10.9342 15.7918 12.6489 15.0816 13.9132 13.8174C15.1774 12.5531 15.8877 10.8385 15.8877 9.05064C15.8877 7.26278 15.1774 5.54814 13.9132 4.28393C12.6489 3.01973 10.9342 2.30951 9.1463 2.30951C7.35838 2.30951 5.64369 3.01973 4.37943 4.28393Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              <input
                type="text"
                name=""
                id=""
                placeholder="Tafta Nyumba"
                className="w-full outline-none"
              />
            </div>
            <div className="flex items-center gap-2 text-secondary bg-primary w-fit rounded-xl border-[1px] border-black/10 px-3 py-2">
              <div>
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.90038 13.1984H10.939C11.4996 13.1984 11.9583 12.7397 11.9583 12.179C11.9583 11.6184 11.4996 11.1597 10.939 11.1597H8.90038C8.33976 11.1597 7.88106 11.6184 7.88106 12.179C7.88106 12.7397 8.33976 13.1984 8.90038 13.1984ZM0.74585 1.98587C0.74585 2.54649 1.20454 3.00519 1.76517 3.00519H18.0742C18.6349 3.00519 19.0935 2.54649 19.0935 1.98587C19.0935 1.42525 18.6349 0.966553 18.0742 0.966553H1.76517C1.20454 0.966553 0.74585 1.42525 0.74585 1.98587ZM4.82312 8.10177H15.0163C15.5769 8.10177 16.0356 7.64308 16.0356 7.08245C16.0356 6.52183 15.5769 6.06314 15.0163 6.06314H4.82312C4.26249 6.06314 3.8038 6.52183 3.8038 7.08245C3.8038 7.64308 4.26249 8.10177 4.82312 8.10177Z"
                    fill="#45A9EA"
                  />
                </svg>
              </div>
              <span>Chuja</span>
            </div>
            <div className="flex items-center gap-2 text-secondary bg-primary w-fit rounded-xl border-[1px] border-black/10 px-3 py-2">
              <div>
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6434 14.7071C10.7793 14.7071 10.9067 14.6857 11.0256 14.6429C11.1445 14.6007 11.2549 14.5287 11.3569 14.4268L14.0071 11.7766C14.194 11.5897 14.2874 11.3518 14.2874 11.063C14.2874 10.7742 14.194 10.5364 14.0071 10.3495C13.8202 10.1626 13.5824 10.0692 13.2936 10.0692C13.0048 10.0692 12.7669 10.1626 12.5801 10.3495L11.6627 11.2669V8.00509C11.6627 7.71628 11.5652 7.47402 11.3701 7.27832C11.1744 7.08329 10.9322 6.98577 10.6434 6.98577C10.3546 6.98577 10.1126 7.08329 9.91761 7.27832C9.7219 7.47402 9.62404 7.71628 9.62404 8.00509V11.2669L8.70666 10.3495C8.51978 10.1626 8.28194 10.0692 7.99314 10.0692C7.70433 10.0692 7.46649 10.1626 7.27962 10.3495C7.09274 10.5364 6.9993 10.7742 6.9993 11.063C6.9993 11.3518 7.09274 11.5897 7.27962 11.7766L9.92984 14.4268C10.0318 14.5287 10.1422 14.6007 10.2611 14.6429C10.38 14.6857 10.5075 14.7071 10.6434 14.7071ZM10.6434 21.2562C9.2333 21.2562 7.90819 20.9885 6.66803 20.453C5.42786 19.9182 4.34908 19.1921 3.4317 18.2747C2.51431 17.3573 1.78822 16.2785 1.25342 15.0384C0.717936 13.7982 0.450195 12.4731 0.450195 11.063C0.450195 9.65298 0.717936 8.32787 1.25342 7.0877C1.78822 5.84754 2.51431 4.76876 3.4317 3.85137C4.34908 2.93399 5.42786 2.20756 6.66803 1.67208C7.90819 1.13727 9.2333 0.869873 10.6434 0.869873C12.0534 0.869873 13.3785 1.13727 14.6187 1.67208C15.8589 2.20756 16.9376 2.93399 17.855 3.85137C18.7724 4.76876 19.4985 5.84754 20.0333 7.0877C20.5688 8.32787 20.8365 9.65298 20.8365 11.063C20.8365 12.4731 20.5688 13.7982 20.0333 15.0384C19.4985 16.2785 18.7724 17.3573 17.855 18.2747C16.9376 19.1921 15.8589 19.9182 14.6187 20.453C13.3785 20.9885 12.0534 21.2562 10.6434 21.2562ZM10.6434 19.2176C12.9028 19.2176 14.827 18.4235 16.4157 16.8354C18.0038 15.2467 18.7979 13.3225 18.7979 11.063C18.7979 8.80355 18.0038 6.87942 16.4157 5.29065C14.827 3.70255 12.9028 2.90851 10.6434 2.90851C8.38387 2.90851 6.46008 3.70255 4.87199 5.29065C3.28322 6.87942 2.48883 8.80355 2.48883 11.063C2.48883 13.3225 3.28322 15.2467 4.87199 16.8354C6.46008 18.4235 8.38387 19.2176 10.6434 19.2176Z"
                    fill="#45A9EA"
                  />
                </svg>
              </div>
              <span>Taarifa</span>
            </div>
          </div>
          <div className="flex justify-center">
            <table className="w-[95%]">
              <thead>
                <tr>
                  <td className="font-bold p-2">Jina</td>
                  <td className="font-bold py-2">Eneo Lilipo</td>
                  <td className="font-bold py-2">Vyumba</td>
                  <td className="font-bold py-2">Wapangaji</td>
                  <td className="font-bold py-2"></td>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-ternary">
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
                <tr className="odd:bg-ternary">
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
                <tr className="odd:bg-ternary">
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
              </tbody>
            </table>
          </div>

          <div className="py-2 mt-8 mx-6 bg-ternary flex gap-3 px-5 rounded-xl justify-between">
            <div className=" flex items-center px-4 font-bold">1 of 3</div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 text-secondary bg-primary w-fit rounded-xl border-[1px] border-black/10 p-2">
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
              <div className="flex items-center gap-2 text-secondary bg-primary w-fit rounded-xl border-[1px] border-black/10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 stroke-black/30"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2 text-secondary bg-primary w-fit rounded-xl border-[1px] border-black/10 p-2">
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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
