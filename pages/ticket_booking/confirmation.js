import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { addTotalPrice } from "@/app/features/ticketBookingSlicer/ticketBookingSlice";
import { Table } from "antd";

export default function Confirmation() {
  const seatType = useSelector((state) => state.allSeatReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const totalPrice =
      seatType.classic.length * 100 +
      seatType.standard.length * 200 +
      seatType.premium.length * 300;
    dispatch(addTotalPrice(totalPrice));
  }, [dispatch, seatType]);

  const dataSource = [
    {
      id: 1,
      type: "Classic",
      seat: `${seatType.classic + " "}`,
      price: `${seatType.classic.length} * 100 =
    ${seatType.classic.length * 100}tk`,
    },
    {
      id: 2,
      type: "Standard",
      seat: `${seatType.standard + " "}`,
      price: ` ${seatType.standard.length} * 200 =
    ${seatType.standard.length * 200}tk`,
    },
    {
      id: 3,
      type: "Premium",
      seat: `${seatType.premium + " "}`,
      price: `${seatType.premium.length} * 300 =
    ${seatType.premium.length * 300}tk`,
    },
    {
      id: 4,
      type: "Total Price",
      seat: "",
      price: `= ${
        seatType.classic.length * 100 +
        seatType.standard.length * 200 +
        seatType.premium.length * 300
      }
      tk`,
    },
  ];
  const columns = [
    { title: "Type", dataIndex: "type" },
    { title: "Seats", dataIndex: "seat" },
    { title: "Price", dataIndex: "price" },
  ];

  const renderData = (
    <>
      <Head>
        <title>Confirmation</title>
      </Head>
      <div className="flexStyle md:my-10">
        <div
          className="row justify-content-center  "
          style={{ width: "500px" }}
        >
          <div className="col-md-1 md:my-5 ">
            <div className="rounded-sm">
              <img
                src="https://blockbusterbd.com/uploads/movies/posters/leader-amie-bangladesh-8826415191682089760.jpg"
                className=" w-full h-60 rounded-t-md"
                alt="..."
              />
              <div className=" ">
                <div className="bg-gray-900 ">
                  <div className="showName">
                  <p className="showName" >
                    LEADER
                  </p>
                  </div>
                  <p className="card-text text-muted mt-1 text-gray-200 font-medium">
                    Your seat information
                  </p>
                </div>
                <Table
                className="no-hover"
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return <>{renderData}</>;
}
