import Homes from "./home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addFullDate,
  addSelectShowtime,
  addTotalPrice,
  removeData,
  updateSelectedSeats,
} from "@/app/features/ticketBookingSlicer/ticketBookingSlice";
const ticketBookingData = {
  selectShowtime: "",
  fullDate: "",
  selectedSeats: [],
  totalPrice: 0,
  totalSeats: 0,
  Sprice: 100,
  Pprice: 200,
  Cprice: 300,
  userId: "",
  classic: [],
  standard: [],
  premium: [],
}

export default function index() {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("ticketBooking", JSON.stringify(ticketBookingData));
    dispatch(addFullDate(""));
    dispatch(addSelectShowtime(""));
    dispatch(removeData(""));
    dispatch(updateSelectedSeats(""));
    dispatch(addTotalPrice(""));
  }, []);
  
  return (
    <>
      <div className=" w-full overflow-hidden">
        <Homes />
      </div>
    </>
  );
}
