import Head from "next/head";
import { useState } from "react";
const date = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const allDates = [
  {
    id: 1,
    date: date.getDate(),
  },
  {
    id: 2,
    date: date.getDate() + 1,
  },
  {
    id: 3,
    date: date.getDate() + 2,
  },
  {
    id: 4,
    date: date.getDate() + 3,
  },
  {
    id: 5,
    date: date.getDate() + 4,
  },
  {
    id: 6,
    date: date.getDate() + 5,
  },
  {
    id: 7,
    date: date.getDate() + 6,
  },
];
const allTimes = [
  {
    id: 1,
    time: "12.00pm",
  },
  {
    id: 2,
    time: "3.00pm",
  },
  {
    id: 3,
    time: "6.00pm",
  },
  {
    id: 4,
    time: "9.00pm",
  },
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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

const TimeSchedule = ({ setAllData, allData }) => {
  const [allDateTime, setAllDateTime] = useState([]);
  const [selectDate, setSelectDate] = useState(false);
  const [selectTime, setSelectTime] = useState(false);
  const [timeShow, setTimeShow] = useState(false);

  const handleSelectDate = (id, datePick) => {
    setTimeShow(true);
    setSelectDate(id);
    setAllData({ ...allData, date: convertDayToDate(datePick.date) });
  };
  const handleSelectTime = (id, timePick) => {
    setTimeShow(true);
    setSelectTime(id);
    setAllData({ ...allData, selectShowtime: timePick.time });

    setAllDateTime([
      {
        time: timePick.time,
      },
    ]);
  };

  const renderData = (
    <div>
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
              allData={allData}
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
              allData={allData}
            />
          );
        })}
      </div>
    </div>
  );
  return <>{renderData}</>;
};
export default TimeSchedule;

function SelectDate({ dateTime, click, status, datePick, allData }) {
  return (
    <>
      <div
        className={status ? "bg-teal-600" : "bg-gray-600 date rounded-sm p-2 "}
        onClick={click}
      >
        <p className=" text-sm ">{datePick.date}</p>
        <p className=" text-sm ">{weekday[date.getDay() + dateTime]}</p>
      </div>
    </>
  );
}

function SelectTime({ timePick, click, status, allData }) {
  return (
    <>
      <div
        className={
          allData.selectShowtime.includes(timePick.time)
            ? "bg-teal-600"
            : "bg-gray-600 flex justify-center items-center p-2 rounded-sm"
        }
        onClick={click}
      >
        {timePick.time}
      </div>
    </>
  );
}
