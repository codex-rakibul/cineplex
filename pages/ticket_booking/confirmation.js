import React from "react";
import { Button, message, Steps, theme } from "antd";
import Head from "next/head";

export default function Confirmation({ allData, setAllData }) {
  const {selectedSeats } = allData;
  const renderData = (
    <>
      <Head>
        <title>Confirmation</title>
      </Head>
      <div className="flex justify-center items-center  mb-6 mx-4">
        <div className="row justify-content-center " style={{ width: "500px" }}>
          <div className="col-md-1 md:my-5 ">
            <div className="card r">
              <img
                src="https://blockbusterbd.com/uploads/movies/posters/leader-amie-bangladesh-8826415191682089760.jpg"
                className=" w-full h-60"
                alt="..."
              />
              <div className="card-body px-4 p-4">
                <h5 className="card-title  mt-1 text-2xl">LEADER</h5>
                <p className="card-text text-muted mt-3">
                  Ipsa earum saepe tempora, neque laudantium non itaque ullam
                  reiciendis dolore explicabo!
                </p>
                <div className="alert alert-light  plan ">
                  <div className="col-6">
                    <div>SEAT NO : {selectedSeats + " "}</div>
                  </div>
                  <div className="col-3 d-flex align-items-center ">
                    <a href="#">
                      {" "}
                      TOTAL PRICE : {selectedSeats.length} *{" "}
                      {allData.Sprice} ={" "}
                      {selectedSeats.length * allData.Sprice}
                      {/* { setAllData({ ...allData,totalPrice : allData.selectedSeats.length * allData.Sprice})} */}
                    </a>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return <>{renderData}</>;
}
