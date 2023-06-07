import SeatsPlan from "./seatPlan";
import vb from "./bg2.mp4";
import React, { useEffect } from "react";
import Head from "next/head";
import {
  firstStyle,
  sStyle,
  thirdStyle,
  allTitle,
  ticketPrice,
} from "../../components/styleCom/totalSeatPlanStyle.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";

const TotalSeatPlan = () => {
  const renderData = (
    <div className="ss:mx-10">
      <div className="mt-6  w-[100%] ">
        <div className=" ">
          <Head>
            <title>Seats Plan</title>
          </Head>
          <div className="flexStyle ">
            <div className="grid grid-rows-2">
              <div className={firstStyle}>
                {allTitle.map((item) => {
                  const { id, title, className } = item;
                  return (
                    <div key={id} className={`${className} available`}>
                      {title}
                    </div>
                  );
                })}
              </div>
              <div className={sStyle}>
                {ticketPrice.map((item) => {
                  const { id, title, className } = item;
                  return (
                    <div
                      key={id}
                      className={`${className} ml-1 text-xl  font-semibold `}
                    >
                      {title} <FontAwesomeIcon icon={faBangladeshiTakaSign} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="screen-container">
            <div className={`${thirdStyle} seatBox`}></div>
          </div>
        </div>
      </div>
      <div className="ss:overflow-y-hidden overflow-y-auto ss:pt-8 ss:px-0 px-6 ">
        <div className="ss:w-[100%] w-[1200px] ">
          <SeatsPlan className="  " />
        </div>
      </div>
    </div>
  );
  return <>{renderData}</>;
};
export default TotalSeatPlan;
