import HomePage from "./homePage";
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

export default function index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addFullDate(""));
    dispatch(addSelectShowtime(""));
    dispatch(removeData(""));
    dispatch(updateSelectedSeats(""));
    dispatch(addTotalPrice(""));
  }, []);
  return (
    <>
      <div className=" w-full overflow-hidden">
        {/* <HomePage /> */}
        <Homes />
      </div>
    </>
  );
}
