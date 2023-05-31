export const date = new Date();
const currentDay = date.getDate();
const totalDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

export const allDates = [
  {
    id: 1,
    date: currentDay,
    fullDate: date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: '2-digit' }),
  },
  {
    id: 2,
    date: currentDay + 1 > totalDaysInMonth ? 1 : currentDay + 1,
    fullDate: new Date(date.getFullYear(), date.getMonth(), currentDay + 1).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: '2-digit' }),
  },
  {
    id: 3,
    date: currentDay + 2 > totalDaysInMonth ? currentDay + 2 - totalDaysInMonth : currentDay + 2,
    fullDate: new Date(date.getFullYear(), date.getMonth(), currentDay + 2).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: '2-digit' }),
  },
  {
    id: 4,
    date: currentDay + 3 > totalDaysInMonth ? currentDay + 3 - totalDaysInMonth : currentDay + 3,
    fullDate: new Date(date.getFullYear(), date.getMonth(), currentDay + 3).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: '2-digit' }),
  },
  {
    id: 5,
    date: currentDay + 4 > totalDaysInMonth ? currentDay + 4 - totalDaysInMonth : currentDay + 4,
    fullDate: new Date(date.getFullYear(), date.getMonth(), currentDay + 4).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: '2-digit' }),
  },
  {
    id: 6,
    date: currentDay + 5 > totalDaysInMonth ? currentDay + 5 - totalDaysInMonth : currentDay + 5,
    fullDate: new Date(date.getFullYear(), date.getMonth(), currentDay + 5).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: '2-digit' }),
  },
  {
    id: 7,
    date: currentDay + 6 > totalDaysInMonth ? currentDay + 6 - totalDaysInMonth : currentDay + 6,
    fullDate: new Date(date.getFullYear(), date.getMonth(), currentDay + 6).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: '2-digit' }),
  },
];
  export const weekday = [
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
  export const allTimes = [
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
  export const month = [
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

