import {
  addDate,
  addSelectShowtime,
} from "@/app/features/ticketBookingSlicer/ticketBookingSlice";
import Head from "next/head";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  date,
  weekday,
  allDates,
  allTimes,
  month,
} from "../../../components/styleCom/timeSheduleStyle";

function convertDayToDate(day) {
  // Get the current year
  var currentYear = new Date().getFullYear();
  var date2 = new Date(); // Month is zero-based, so 0 represents January
  date2.setDate(day);
  var year = date2.getFullYear().toString().slice(-2);
  var monthName = month[date2.getMonth()];
  var dateOfMonth = date2.getDate();
  var formattedDate =
    padZero(dateOfMonth) + "-" + padZero(monthName) + "-" + year;

  return formattedDate;
}

function padZero(number) {
  // Helper function to add leading zero if needed
  return number < 10 ? "0" + number : number;
}

const TimeSchedule = () => {
  const dispatch = useDispatch();
  const ticketBookingData = useSelector((state) => state.ticketBookingReducer);

  const [selectDate, setSelectDate] = useState(false);
  const [selectTime, setSelectTime] = useState(false);

  const handleSelectDate = (id, datePick) => {
    dispatch(addDate(convertDayToDate(datePick.date)));

    setSelectDate(id);
  };
  const handleSelectTime = (id, timePick) => {
    dispatch(addSelectShowtime(timePick.time));

    setSelectTime(id);
  };

  const renderData = (
    <div className="pt-10 pb-6">
      <Head>
        <title>Time Shedule</title>
      </Head>
      <h2 className="text-teal-600 text-2xl font-bold">Pick a Date</h2>
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
            />
          );
        })}
      </div>
      <h2 className="text-teal-600 text-2xl font-bold">Pick a Time</h2>
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
            />
          );
        })}
      </div>
    </div>
  );
  return <>{renderData}</>;
};
export default TimeSchedule;

function SelectDate({ dateTime, click, datePick, ticketBookingData }) {
  return (
    <>
      <div
        className={
          ticketBookingData &&
          ticketBookingData.date &&
          ticketBookingData.date.includes(datePick.date)
            ? "bg-teal-600"
            : "bg-gray-600 date rounded-sm p-2 "
        }
        onClick={click}
      >
        <p className=" text-sm ">{datePick.date}</p>
        <p className=" text-sm ">{weekday[date.getDay() + dateTime]}</p>
      </div>
    </>
  );
}

function SelectTime({ timePick, click, ticketBookingData }) {
  return (
    <>
      <div
        className={
          ticketBookingData &&
          ticketBookingData.selectShowtime &&
          ticketBookingData.selectShowtime.includes(timePick.time)
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
