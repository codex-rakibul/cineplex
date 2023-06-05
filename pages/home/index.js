import React from "react";
import Home from "./Home";
import TrendingMovie from "@/components/trendingMovie";
import UpMovie from "@/components/upcoming";
import Head from "next/head";
import LayoutCom from "@/components/layout";
const Homes = () => {
  return (
    <>
      <Head>
        <title>Cineplex BD</title>
      </Head>
      <div className="bg-black">
        <section className="home ">
          <Home />
        </section>
        <div className=" h-full  md:py-10  pt-6  bg-gray-00 ">
          <TrendingMovie />
        </div>
        <div className="bg-black z-0 md:h-full h-fit pt-10  pb-10 md:px-10  ">
          <UpMovie />
        </div>
      </div>
    </>
  );
};

export default Homes;
