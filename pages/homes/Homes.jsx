import React from "react";
import Home from "./Home";
import TrendingMovie from "@/components/trendingMovie";
import UpMovie from "@/components/upcoming";
const Homes = () => {
  return (
    <>
      <section className="home ">
        <Home />
      </section>
      <div className=" h-full  md:py-10  pt-6 md:px-10 bg-gray-00 ">
        <TrendingMovie />
      </div>
      <div className="bg-black z-0 md:h-full h-fit pt-10  pb-10 md:px-10  ">
        <UpMovie />
      </div>
    </>
  );
};

export default Homes;
