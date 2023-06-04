import UpMovie from "@/components/upcoming";
import Head from "next/head";
import React from "react";

export default function UpcomingMovie() {
  const renderData = (
    <>
      <div className="bg-black">
      <Head>
        <title>Upcoming Movie</title>
      </Head>
      <div className="py-10 ">
        <UpMovie />
      </div>
      <div className=""></div>
    </div>
    </>
  );
  return <>{renderData}</>;
}
