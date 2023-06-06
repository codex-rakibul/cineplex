import {
  addFullDate,
  addSelectShowtime,
} from "@/app/features/ticketBookingSlicer/ticketBookingSlice";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  date,
  weekday,
  allDates,
  allTimes,
  month,
} from "../../../components/styleCom/timeSheduleStyle";

const TimeSchedule = () => {
  const dispatch = useDispatch();
  const ticketBookingData = useSelector((state) => state.ticketBookingReducer);
  const [ticketBookingLocalStorageData, setTicketBookingLocalStorageData] =
    useState();
  console.log(
    "time Com---------",
    ticketBookingLocalStorageData
  );
  const [selectDate, setSelectDate] = useState(false);
  const [selectTime, setSelectTime] = useState(false);

  useEffect(() => {
    const ticketBookingLocalStorageData = JSON.parse(
      localStorage.getItem("ticketBooking")
    );
    setTicketBookingLocalStorageData(ticketBookingLocalStorageData);
  }, [ticketBookingData]);

  const handleSelectDate = (id, datePick) => {
    ticketBookingLocalStorageData.fullDate = datePick.fullDate;
    localStorage.setItem("ticketBooking", JSON.stringify(ticketBookingLocalStorageData));
    dispatch(addFullDate(datePick.fullDate));
    setSelectDate(id);
  };
  const handleSelectTime = (id, timePick) => {
    ticketBookingLocalStorageData.selectShowtime = timePick.time;
    localStorage.setItem("ticketBooking", JSON.stringify(ticketBookingLocalStorageData));
    dispatch(addSelectShowtime(timePick.time));
    setSelectTime(id);
  };

  const renderData = (
    <div className="pt-10 pb-6">
      <Head>
        <title>Time Shedule</title>
      </Head>
      <h2 className="text-teal-600 text-2xl font-bold">Pick a date and time</h2>
      <div className="grid md:grid-cols-7 grid-cols-2 gap-4 text-white md:m-20 m-6 ">
        {allDates.map((datePick, key) => {
          const { id } = datePick;
          return (
            <SelectDate
              key={id}
              dateTime={key}
              status={selectDate === id}
              click={() => handleSelectDate(id, datePick)}
              datePick={datePick}
              ticketBookingData={ticketBookingData}
              ticketBookingLocalStorageData={ticketBookingLocalStorageData}
            />
          );
        })}
      </div>

      <div
        className={` text-white grid md:grid-cols-4 grid-cols-2 gap-6  md:m-20 m-6 cursor-pointer `}
      >
        {allTimes.map((timePick, key) => {
          const { id } = timePick;
          return (
            <SelectTime
              key={id}
              status={selectTime === id}
              click={() => handleSelectTime(id, timePick)}
              timePick={timePick}
              ticketBookingData={ticketBookingData}
              ticketBookingLocalStorageData={ticketBookingLocalStorageData}
            />
          );
        })}
      </div>
    </div>
  );
  return <>{renderData}</>;
};
export default TimeSchedule;

function SelectDate({ dateTime, click, datePick, ticketBookingData,ticketBookingLocalStorageData }) {
  return (
    <div
      className={
        ticketBookingLocalStorageData?.fullDate.includes(datePick.fullDate)
          ? "bg-teal-600"
          : "bg-gray-600 date rounded-sm p-2"
      }
      onClick={click}
    >
      <p className="text-sm">{datePick.date}</p>
      <p className="text-sm">{weekday[(date.getDay() + dateTime) % 7]}</p>
    </div>
  );
}

function SelectTime({ timePick, click, ticketBookingData,ticketBookingLocalStorageData }) {
  return (
    <>
      <div
        className={
          ticketBookingLocalStorageData?.selectShowtime.includes(timePick.time)
            ? "bg-teal-600"
            : "bg-gray-600 flexStyle p-2 rounded-sm"
        }
        onClick={click}
      >
        {timePick.time}
      </div>
    </>
  );
}
