import Head from "next/head";
import React, { useEffect, useState } from "react";
import Homes from "../homes/Homes";
import Navbar from "@/components/navbar";
import FooterCom from "@/components/footer";
import { useSelector } from "react-redux";
import UpcomingMovie from "../upcoming_movies";
import TicketPrice from "../ticket_price";
import About from "../about";
import Login from "../login";

export default function HomePage() {
  const [com, setCom] = useState();
  const component = useSelector(
    (state) => state.navComponentReducer.componentId
  );
  useEffect(() => {
    if (component === undefined || component === null || component === "") {
      setCom(<Homes />);
    } else if (component === "upcoming_movies") {
      setCom(<UpcomingMovie />);
    } else if (component === "ticket_price") {
      setCom(<TicketPrice />);
    } else if (component === "about") {
      setCom(<About />);
    } else if (component === "login") {
      setCom(<Login />);
    }
  }, [component]);
  const renderData = (
    <>
      <div className="bg-black">
        <div className=" h-fit ">
          <Navbar />
        </div>
        {com}
        {component !== "login" && <FooterCom />}
      </div>
    </>
  );
  return <>{renderData}</>;
}
