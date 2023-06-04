import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UpcomingMovie from "../upcoming_movies";
import TicketPrice from "../ticket_price";
import About from "../about";
import Login from "../../pages/signin";
import Homes from "../home";
import LayoutCom from "@/components/layout";
import TicketBooking from "@/components/ticket_booking";
import DetailsPage from "@/components/details";

export default function HomePage() {
  const [com, setCom] = useState();
  const component = useSelector(
    (state) => state.navComponentReducer.componentId
  );

  useEffect(() => {
    if (
      component === undefined ||
      component === null ||
      component === "/home" ||
      component === ""
    ) {
      setCom(<Homes />);
    } else if (component === "upcoming_movies") {
      setCom(<UpcomingMovie />);
    } else if (component === "ticket_price") {
      setCom(<TicketPrice />);
    } else if (component === "about") {
      setCom(<About />);
    } else if (component === "login") {
      setCom(<Login />);
    } else if (component === "ticket_booking") {
      setCom(<TicketBooking />);
    } else if (component === "details") {
      setCom(<DetailsPage />);
    }
  }, [component]);

  const renderData = <LayoutCom>{com}</LayoutCom>;
  return <>{renderData}</>;
}
