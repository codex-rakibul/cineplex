import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
export default function DashboardCom() {
  const lastIncomeData = [
    {
      id: 1,
      name: "Sony",
      date: "24 Nov 2022",
      price: 600,
    },
    {
      id: 2,
      name: "Rakibul Islam",
      date: "24 Nov 2022",
      price: 900,
    },
    {
      id: 3,
      name: "Shamim",
      date: "24 Nov 2022",
      price: 1200,
    },
    {
      id: 4,
      name: "Tushar",
      date: "24 Nov 2022",
      price: 2000,
    },
    {
      id: 5,
      name: "Habib",
      date: "24 Nov 2022",
      price: 400,
    },
    {
      id: 6,
      name: "abcd",
      date: "24 Nov 2022",
      price: 100,
    },
  ];

  const renderData = (
    <div>
      <div id="24h">
        <h1 className="font-bold py-4 uppercase">Last 24h Statistics</h1>
        <div
          id="stats"
          className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-black/60 to-white/5 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-indigo-300 text-sm font-medium uppercase leading-4">
                  Users
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>7+</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black/60 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
              <FontAwesomeIcon className="text-4xl" icon={faBangladeshiTakaSign} />
              </div>
              <div>
                <p className="text-teal-300 text-sm font-medium uppercase leading-4">
                  Income
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>5200<FontAwesomeIcon icon={faBangladeshiTakaSign} /></span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black/60 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-blue-300 text-sm font-medium uppercase leading-4">
                  Invoices
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>+79</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="last-incomes">
        <h1 className="font-bold py-4 uppercase">Last 24h incomes</h1>
        <div
          id="stats"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          
          {lastIncomeData.map(item=>{
            const {id,name,price,date} = item;
            return <div key={id} className="bg-black/60 to-white/5 rounded-lg">
            <div  className="flex flex-row items-center">
              <div className="text-3xl p-4">💰</div>
              <div className="p-2">
                <p className="text-xl font-bold">
                  {price} <FontAwesomeIcon icon={faBangladeshiTakaSign} />
                </p>
                <p className="text-gray-500 font-medium">{name}</p>
                <p className="text-gray-500 text-sm">{date}</p>
              </div>
            </div>
            <div className="border-t border-white/5 p-4">
              <a
                href="#"
                className="inline-flex space-x-2 items-center text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <span>Info</span>
              </a>
            </div>
          </div>
          })}
        </div>
      </div>
      
    </div>
  );
  return <>{renderData}</>;
}
