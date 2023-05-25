import Head from "next/head";
import React from "react";
import Homes from "../homes/Homes";
import Navbar from "@/components/navbar";
import FooterCom from "@/components/footer";
import { Html } from "next/document";
import UpMovie from "../../components/upcoming";
import styles from "../../style";
import TrendingMovie from "@/components/trendingMovie";

export default function HomePage() {
  const renderData = (
    <div className="bg-black">
      <div className=" h-fit ">
        <Head>
          <title>Cineplex</title>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
            crossorigin="anonymous"
          />
        </Head>
        <Navbar />
        <Homes />
      </div>

      <div className=" h-full  md:py-10  pt-6 md:px-10 bg-gray-00 ">
        <TrendingMovie />
      </div>
      <div className="bg-black z-0 md:h-full h-fit pt-10  pb-10 md:px-10  ">
        <UpMovie />
      </div>

      <FooterCom />
    </div>
  );
  return <>{renderData}</>;
}
