import Head from "next/head";
import { PlaySquareOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import React, { useEffect, useRef } from "react";

export default function Done() {
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

  const ticketBookingData = useSelector((state) => state.ticketBookingReducer);
  const userID = useSelector((state) => state.basicAuthReducer.userId);

  const renderData = (
    <div className="">
      <Head>
        <title>Ticket</title>
      </Head>
      <div className=" md:my-20  md:mx-40   md:h-fit h-ful ">
        <div
          ref={ticketRef}
          className="  ticket grid md:grid-cols-2 "
          id="invoice"
        >
          <div className="left ">
            <div className="ticket-info">
              <p className="date text-gray-400">
                <span>CINEPLEX BD</span>
                <span className="nov-10"> {ticketBookingData?.date}</span>
                <span></span>
              </p>
              <div className="show-name">
                <h1>LEADER</h1>
                <h2>CLASSIC</h2>
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
                <p>{ticketBookingData?.date}</p>
                <p>SHOW TIME :- {ticketBookingData.selectShowtime}</p>
                <p>{ticketBookingData.selectedSeats + " "}</p>
              </div>
              <p className="ticket-number mt-2">#{userID}</p>
            </div>
          </div>
        </div>

        <button className="btn" id="downloadPDF">
          Download Ticket
        </button>
      </div>
    </div>
  );

  return <>{renderData}</>;
}
