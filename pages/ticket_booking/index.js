import { message, Steps, theme } from "antd";
import React, { useEffect, useState } from "react";
import TimeSchedule from "./timeshedule";
import TotalSeatPlan from "./totalSeatPlan";
import Done from "./done";
import Confirmation from "./confirmation";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

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
  const loginCheck = useSelector(
    (state) => state.basicAuthReducer.loginChecked
  );
  const router = useRouter();
  const ticketBookingData = useSelector((state) => state.ticketBookingReducer);
  console.log(
    "redux toolkit Ticket Booking  Index Page------",
    ticketBookingData
  );
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
              <TimeSchedule />
            ) : steps[current].content == "seats" ? (
              <TotalSeatPlan />
            ) : steps[current].content == "confirm" ? (
              <Confirmation />
            ) : (
              <Done />
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
                onClick={() => {
                  if (steps[current].content == "time") {
                    if (
                      ticketBookingData?.date !== "" &&
                      ticketBookingData?.selectShowtime !== ""
                    ) {
                      next();
                    } else {
                      message.error("Please select a date and time");
                    }
                  } else if (steps[current].content == "seats") {
                    if (ticketBookingData.selectedSeats.length !== 0) {
                      next();
                    } else {
                      message.error("Please select a seat");
                    }
                  } else if (steps[current].content == "confirm") {
                    if (loginCheck) {
                      next();
                    } else {
                      message.error(
                        "Please login first then confirm your ticket"
                      );
                      router.push("/login");
                    }
                  }
                }}
              >
                Next
              </button>
            )}
            {current === steps.length - 1 && (
              <button
                className="flex items-center justify-center"
                onClick={() =>
                  message.success(
                    "Ticket Confirmation has been confirmed successfully"
                  )
                }
              >
                Done
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  return <>{renderData}</>;
};
export default TicketBooking;
