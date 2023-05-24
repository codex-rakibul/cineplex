import React from "react";
import { homeData } from "../../dummyData/dummyData";
import Home from "./Home";
const Homes = () => {

  return (
    <>
      <section className="home ">
        <Home items={homeData } />
      </section>
    </>
  );
};

export default Homes;
