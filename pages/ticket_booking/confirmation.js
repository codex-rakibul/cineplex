import React from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { addTotalPrice } from "@/app/features/ticketBookingSlicer/ticketBookingSlice";

export default function Confirmation() {
  const seatType = useSelector((state) => state.allSeatReducer);
  const dispatch = useDispatch();
  dispatch(
    addTotalPrice(
      seatType.classic.length * 100 +
        seatType.standard.length * 200 +
        seatType.premium.length * 300
    )
  );
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
                  Your seat information
                </p>
                <div className="alert alert-light  plan ">
                  <div className=" tickectBox  bg-white text-black">
                    <table class="table-fixed w-full">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Seats No</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Classic</td>
                          <td>{seatType.classic + " "}</td>
                          {seatType.classic.length !== 0 && (
                            <td>
                              {seatType.classic.length} * 100 ={" "}
                              {seatType.classic.length * 100}tk
                            </td>
                          )}
                        </tr>
                        <tr>
                          <td>Standard</td>
                          <td>{seatType.standard + " "}</td>
                          {seatType.standard.length !== 0 && (
                            <td>
                              {seatType.standard.length} * 200 ={" "}
                              {seatType.standard.length * 200}tk
                            </td>
                          )}
                        </tr>
                        <tr>
                          <td>Premium</td>
                          <td>{seatType.premium + " "}</td>
                          {seatType.premium.length !== 0 && (
                            <td>
                              {seatType.premium.length} * 300 ={" "}
                              {seatType.premium.length * 300}tk
                            </td>
                          )}
                        </tr>
                        <tr>
                          <td>Total Price</td>
                          <td></td>
                          <td>
                            {seatType.classic.length * 100 +
                              seatType.standard.length * 200 +
                              seatType.premium.length * 300}
                            tk
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
