import React, { useEffect } from "react";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
export default function TicketPrice() {
  useEffect(() => {
    // const handleClick = (e) => {
    //   const element = e.target;
    //   const card = $(element).closest(".card2");

    //   $(card).toggleClass("is--flipped");
    // };

    // $(document).on("click", ".card2", handleClick);

    // return () => {
    //   $(document).off("click", ".card2", handleClick);
    // };
    const handleHover = (e) => {
      const element = e.target;
      const card = $(element).closest(".card2");

      $(card).toggleClass("is--flipped");
    };

    $(document).on("mouseenter", ".card2", handleHover);
    $(document).on("mouseleave", ".card2", handleHover);

    return () => {
      $(document).off("mouseenter", ".card2", handleHover);
      $(document).off("mouseleave", ".card2", handleHover);
    };
  }, []);

  const renderData = (
    <>
      <Head>
        <title>Ticket Price</title>
      </Head>
      <div className=" bg-black md:py-48 flex items-center justify-center">
        <div className=" ">
          <div>
            <div className=" cardTable md:grid md:grid-cols-3 md:gap-56  ">
              <div className="card2 card--1 md:mb-0  md:mt-0 mt-16 mb-16">
                <figure className="card__front flex justify-center items-center">
                  C L A S S I C
                </figure>
                <figure className="card__back flex justify-center items-center text-2xl font-semibold">
                  100 <span className="mr-2"></span>{" "}
                  <FontAwesomeIcon
                    icon={faBangladeshiTakaSign}
                    className="h-6"
                  />
                </figure>
              </div>

              <div className="card2 card--2 ">
                <figure className="card__front flex justify-center items-center text-uppercase">
                  S T A N D A R D
                </figure>
                <figure className="card__back flex justify-center items-center  text-2xl font-semibold">
                  200 <span className="mr-2"></span>{" "}
                  <FontAwesomeIcon
                    icon={faBangladeshiTakaSign}
                    className="h-6"
                  />
                </figure>
              </div>

              <div className="card2 card--3 ">
                <figure className="card__front flex justify-center items-center">
                  P R E M I U M
                </figure>
                <figure className="card__back flex justify-center items-center  text-2xl font-semibold">
                  300 <span className="mr-2"></span>{" "}
                  <FontAwesomeIcon
                    icon={faBangladeshiTakaSign}
                    className="h-6"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return <>{renderData}</>;
}
