import FooterCom from "@/components/footer";
import Navbar from "@/components/navbar";
import UpMovie from "@/components/upcoming";
import Head from "next/head";
import React from "react";

export default function UpcomingMovie() {
  const renderData = (
    <div>
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
      <div className="py-10">
        <UpMovie />
      </div>
      <FooterCom />
    </div>
  );
  return <>{renderData}</>;
}
