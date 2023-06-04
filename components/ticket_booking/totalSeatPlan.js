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
    <div className="mt-6">
      <Head>
        <title>Seats Plan</title>
      </Head>
      <div className="flexStyle">
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
      <div className="screen-container ">
        <div className={thirdStyle}>
          <video id="videoPlayer" autoPlay muted loop playsInline>
            <source src={vb} />
          </video>
        </div>
        <div className="flex md:m-20  m-4">
          <SeatsPlan />
        </div>
      </div>
    </div>
  );
  return <>{renderData}</>;
};
export default TotalSeatPlan;
