import { message, Steps, theme } from "antd";
import React, { useEffect, useState } from "react";
import TimeSchedule from "./timeshedule";
import TotalSeatPlan from "./totalSeatPlan";
import Done from "./done";
import Confirmation from "./confirmation";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from "../../components/style";
import {
  addBookingSystem,
  addDonePage,
} from "@/app/features/basicAuthSlicer/basicAuthSlice";

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
  const [localStorageUserData, setLocalStorageUserData] = useState();
  const [ticketBookingLocalStorageData, setTicketBookingLocalStorageData] =
    useState();

  const dispatch = useDispatch();
  const router = useRouter();
  const ticketBookingData = useSelector((state) => state.ticketBookingReducer);
  const loginCheck = useSelector((state) => state.basicAuthReducer);
  const { donePage } = useSelector((state) => state.basicAuthReducer);
  useEffect(() => {}, []);

  useEffect(() => {
    if (donePage) {
      setCurrent(current + 3);
      dispatch(addDonePage(false));
    }
  }, [donePage]);

  useEffect(() => {
    const ticketBookingLocalStorageData = JSON.parse(
      localStorage.getItem("ticketBooking")
    );
    setTicketBookingLocalStorageData(ticketBookingLocalStorageData);
    const user = JSON.parse(localStorage.getItem("user"));
    setLocalStorageUserData(user);
    console.log(
      "localStorageUserData.status-----",
      localStorageUserData?.status
    );
  }, [ticketBookingData]);

  const handleUnLogin = () => {
    dispatch(addBookingSystem(true));
    router.push("/signin");
  };

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
    border: `1px solid ${token.colorBorder}`,
    marginTop: "30px",
  };

  const handleDone = () => {
    message.success("Ticket confirmation successfully done");
    dispatch(addDonePage(false));
    router.push("/");
  };

  const renderData = (
    <div
      className={` h-fit bg-black ${styles.paddingX} sm:${styles.flexCenter}`}
    >
      <div className={`h-full bg-black ${styles.boxWidth} `}>
        <div className="md:py-10 py-4 bg-black h-auto text-white ">
          <Steps current={current} items={items} />
          <div style={contentStyle}>
            {donePage ? (
              <Done />
            ) : steps[current].content == "time" ? (
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
                  className="flexStyle rounded-sm"
                  style={{
                    marginTop: "0px",
                  }}
                  onClick={() => prev()}
                >
                  Previous
                </button>
              )}
            </div>
            {!donePage && current < steps.length - 1 && (
              <button
                className="flexStyle rounded-sm"
                type="primary"
                onClick={() => {
                  if (steps[current].content == "time") {
                    if (
                      ticketBookingLocalStorageData?.fullDate !== "" &&
                      ticketBookingLocalStorageData?.selectShowtime !== ""
                    ) {
                      next();
                    } else {
                      message.error("Please select a date and time");
                    }
                  } else if (steps[current].content == "seats") {
                    if (
                      ticketBookingLocalStorageData?.selectedSeats.length !== 0
                    ) {
                      next();
                    } else {
                      message.error("Please select a seat");
                    }
                  } else if (steps[current].content == "confirm") {
                    if (localStorageUserData?.status === "active") {
                      next();
                    } else {
                      message.error(
                        "Please login first then confirm your ticket"
                      );
                      handleUnLogin();
                    }
                  }
                }}
              >
                {steps[current].content == "confirm" ? "Confirm" : "Next"}
              </button>
            )}
            {(current === steps.length - 1 || donePage) && (
              <button
                className="flexStyle rounded-sm"
                onClick={() => handleDone()}
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
