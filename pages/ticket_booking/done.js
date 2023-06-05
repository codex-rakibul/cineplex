import Head from "next/head";
import { PlaySquareOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import React, { use, useEffect, useRef, useState } from "react";

export default function Done() {
  const [localStorageUserData, setLocalStorageUserData] = useState();
  const ticketBookingData = useSelector((state) => state.ticketBookingReducer);
  const userId = useSelector((state) => state.basicAuthReducer.userId);

  const ticketRef = useRef(null);
  useEffect(() => {
    import("html2pdf.js").then((module) => {
      const html2pdf = module.default;
      const handleDownloadPDF = () => {
        const element = ticketRef.current;
        if (element) {
          const ticketWidth = element.offsetWidth;
          const ticketHeight = element.offsetHeight;
          html2pdf()
            .set({
              html2canvas: { scale: 1 },
              page: { format: [ticketWidth, ticketHeight] },
            })

            .from(element)
            .save("Ticket.pdf");
        }
      };

      const button = document.getElementById("downloadPDF");
      if (button) {
        button.addEventListener("click", handleDownloadPDF);
      }
    });
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      setLocalStorageUserData(user);
    }
  }, []);

  const renderData = (
    <div className="">
      <Head>
        <title>Ticket</title>
      </Head>
      <div className=" md:my-20   md:mx-40   md:h-fit h-ful ">
        <div
          ref={ticketRef}
          className="  ticket grid md:grid-cols-2  "
          id="invoice"
        >
          <div className="left  ">
            <div className="ticket-info md:rounded-t-none rounded-t-xl">
              <p className="showName">CINEPLEX BD</p>
              <p className="date text-gray-400">
                {ticketBookingData?.fullDate}
              </p>
              <div className="show-name">
                <h1>LEADER</h1>
              </div>
              <div className=" text-white">
                <p>SHOW TIME :- {ticketBookingData?.selectShowtime}</p>
              </div>
              <div className="tagline text-white">
                <p>{ticketBookingData?.selectedSeats + " "}</p>
              </div>
              <p className="location text-gray-400 mt-4">
                <span>CINEPLEX BD </span>
                <PlaySquareOutlined />
                <span>CINEPLEX BD</span>
              </p>
            </div>
          </div>
          <div className="right bg-gray-200 ">
            <div className="right-info-container ">
              <div className="show-name ">
                <p className="showName">CINEPLEX BD</p>
              </div>
              <div className="time">
                <p>{ticketBookingData?.fullDate}</p>
                <div className="show-name">
                  <h1>LEADER</h1>
                </div>
                <p>SHOW TIME :- {ticketBookingData.selectShowtime}</p>
                <p>{ticketBookingData.selectedSeats + " "}</p>
              </div>
              <p className="ticket-number ">#{localStorageUserData?.userId}</p>
            </div>
          </div>
        </div>
        <button
          className="btn md:rounded-b-none rounded-b-[7px]"
          id="downloadPDF"
        >
          Download Ticket
        </button>
      </div>
    </div>
  );

  return <>{renderData}</>;
}
