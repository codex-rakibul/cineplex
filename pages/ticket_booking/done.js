import Head from "next/head";
import React from "react";
import { PlaySquareOutlined } from "@ant-design/icons";

export default function Done({ allData }) {
  const imgUrl =
    "https://blockbusterbd.com/uploads/movies/posters/leader-amie-bangladesh-8826415191682089760.jpg";

  if (!allData || !allData.date || !allData.selectShowtime || !allData.selectedSeats || !allData.userId) {
    return null; // or show an error message
  }

  const renderData = (
    <div>
      <Head>
        <title>Ticket</title>
      </Head>
      <div className="md:my-20 md:mx-40 md:h-fit h-ful mx-8 mb-6 bg-white  w-fit">
        <div className="ticket   grid md:grid-cols-2 " id="invoice">
          <div className="left grid md:grid-cols-2">
            <div>
              <div className="h-full">
                <img className="h-full" src={imgUrl} alt="" />
              </div>
              <div className="ticket-number">
                <p></p>
              </div>
            </div>
            <div className="ticket-info">
              <p className="date">
                <span>CINEPLEX BD</span>
                <span className="nov-10"> {allData?.date}</span>
                <span></span>
              </p>
              <div className="show-name">
                <h1>LEADER</h1>
                <h2>CLASSIC</h2>
              </div>
              <div className="time">
                <p>SHOW TIME :- {allData?.selectShowtime}</p>
              </div>
              <div className="tagline">
                <p>{allData?.selectedSeats + " "}</p>
              </div>
              <p className="location">
                <span>CINEPLEX BD </span>
                <PlaySquareOutlined />
                <span>CINEPLEX BD</span>
              </p>
            </div>
          </div>
          <div className="right bg-gray-200 ">
            <p className="admit-one">
              <span>CINEPLEX</span>
              <span>CINEPLEX</span>
              <span>CINEPLEX</span>
            </p>
            <div className="right-info-container ">
              <div className="show-name ">
                <p className="showName">CINEPLEX BD</p>
              </div>
              <div className="time">
                <p>{allData?.date}</p>
                <p>SHOW TIME :- {allData.selectShowtime}</p>
                <p>{allData.selectedSeats + " "}</p>
              </div>

              <p className="ticket-number mt-2">#{allData?.userId}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  return <>{renderData}</>;
}