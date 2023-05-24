import SeatsPlan from "./seatPlan";
import vb from "./bg2.mp4";
import React from "react";
import Head from "next/head";
const TotalSeatPlan = ({ allData, setAllData }) => {
  console.log("seatplan: ", allData && allData.date);
  const renderData = (
    <div>
      <Head>
        <title>Seats Plan</title>
      </Head>
      <div className="flex gap-20 justify-center items-center">
      <div className="grid grid-cols-3 md:gap-60 gap-4 md:mt-8 md:mb-0 mb-4 text-white justify-center">
        <div className="bg-gray-600 h-10 md:w-40 w-24 flex items-center justify-center rounded-sm">
          Available
        </div>
        <div className="bg-red-600 h-10 md:w-40  w-24 flex items-center justify-center rounded-sm">
          Booked
        </div>
        <div className="bg-teal-600 h-10 md:w-40 w-24 flex items-center justify-center rounded-sm">
          Selected
        </div>
      </div>
      </div>
      <div className="screen-container">
        <div className="  shadow-sm md:mx-12 md:my-12 tvbox flex justify-center items-center md:text-5xl text-lg md:h-80 h-40">
          <video autoPlay muted loop>
            <source src={vb} />
          </video>
        </div>
        <div className="flex md:m-20  m-4">
          <SeatsPlan allData={allData} setAllData={setAllData} />
        </div>
      </div>
    </div>
  );
  return <>{renderData}</>;
};
export default TotalSeatPlan;
