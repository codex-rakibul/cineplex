import { Button, message, Steps, theme } from "antd";
import React, { useEffect, useState } from "react";
import TimeSchedule from "./timeshedule";
import TotalSeatPlan from "./totalSeatPlan";
import Done from "./done";
import Confirmation from "./confirmation";

const steps = [
  {
    title: "Time Shedule",
    content: "time",
  },
  {
    title: "Seats Plan",
    content: "seats",
  },
  {
    title: "Confirmation",
    content: "confirm",
  },
  {
    title: "Done",
    content: "done",
  },
];
const TicketBooking = () => {
  const [allData, setAllData] = useState({
    selectShowtime: "",
    date: "",
    selectedSeats: [],
    totalPrice: 0,
    totalSeats: 0,
    Sprice: 100,
    Pprice: 200,
    Cprice: 300,
    userId: "10002",
  });
  console.log("allData frm home---", allData);

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "30px ",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 30,
    paddingTop: "20px",
  };

  const renderData = (
    <div>
      <div className="h-screen bg-black">
        <div className="md:p-10 p-4 bg-black h-auto text-white ">
          <Steps current={current} items={items} />
          <div style={contentStyle}>
            {steps[current].content == "time" ? (
              <TimeSchedule setAllData={setAllData} allData={allData} />
            ) : steps[current].content == "seats" ? (
              <TotalSeatPlan
                allData={allData}
                setAllData={setAllData}

                // allseatSelected={allseatSelected}
                // setAllSeatSeleted={setAllSeatSeleted}
              />
            ) : steps[current].content == "confirm" ? (
              <Confirmation setAllData={setAllData} allData={allData}/>
            ) : (
              <Done allData={allData}/>
            )}
          </div>
          <div
            className="grid grid-cols-2 gap-6"
            style={{
              marginTop: 24,
            }}
          >
            <div>
              {current > 0 && (
                <button
                  className="flex items-center justify-center"
                  style={{
                    marginTop: "0px",
                  }}
                  onClick={() => prev()}
                >
                  Previous
                </button>
              )}
            </div>
            {current < steps.length - 1 && (
              <button
                className="flex items-center justify-center"
                type="primary"
                onClick={() => next()}
              >
                Next
              </button>
            )}
            {current === steps.length - 1 && (
              <button
                className="flex items-center justify-center"
                onClick={() => message.success("Ticket Confirmation has been confirmed successfully")}
              >
                Done
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <>
      {renderData}
    </>
  );
};
export default TicketBooking;
