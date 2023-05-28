import { useState } from "react";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedSeats,
  addTotalPrice,
  updateSelectedSeats,
} from "@/app/features/ticketBookingSlicer/ticketBookingSlice";
import {
  addClassicSeat,
  addPremiumSeat,
  addStandardSeat,
  removeClassicSeat,
  removePremiumSeat,
  removeStandardSeat,
} from "@/app/features/seatSlicer/seatSlice";

export default function SeatComponents({ row, rowNumber }) {
  const dispatch = useDispatch();
  const ticketBookingData = useSelector((state) => state.ticketBookingReducer);
  const seatType = useSelector((state) => state.allSeatReducer);

  const renderData = (
    <div>
      <div className="grid md:grid-cols-10 md:gap-0 grid-cols-5 gap-4 md:grid-rows-2 grid-rows-3">
        {row?.map((seat, index) => {
          const [seatSelected, setSeatSelected] = useState(false);

          const onSeatHandle = () => {
            setSeatSelected(!seatSelected);

            if (!ticketBookingData.selectedSeats.includes(seat.seatNumber)) {
              message.success(`Your Selected Seat: "${seat.seatNumber}"`);
              if (
                rowNumber === "row0" ||
                rowNumber === "row1" ||
                rowNumber === "row5" ||
                rowNumber === "row6"
              ) {
                dispatch(addClassicSeat(seat.seatNumber));
              }
              if (
                rowNumber === "row2" ||
                rowNumber === "row3" ||
                rowNumber === "row7" ||
                rowNumber === "row8"
              ) {
                dispatch(addStandardSeat(seat.seatNumber));
              }
              if (rowNumber === "row4" || rowNumber === "row9") {
                dispatch(addPremiumSeat(seat.seatNumber));
              }
              dispatch(addSelectedSeats(seat.seatNumber));
            } else {
              if (
                rowNumber === "row0" ||
                rowNumber === "row1" ||
                rowNumber === "row5" ||
                rowNumber === "row6"
              ) {
                dispatch(removeClassicSeat(seat.seatNumber));
              }
              if (
                rowNumber === "row2" ||
                rowNumber === "row3" ||
                rowNumber === "row7" ||
                rowNumber === "row8"
              ) {
                dispatch(removeStandardSeat(seat.seatNumber));
              }
              if (rowNumber === "row4" || rowNumber === "row9") {
                dispatch(removePremiumSeat(seat.seatNumber));
              }
              dispatch(updateSelectedSeats(seat.seatNumber));
            }
          };

          return (
            <div className="" key={index}>
              <div>
                {index === 0 && (
                  <span>
                    {(seat.seatNumber === "A1" ||
                      seat.seatNumber === "B1" ||
                      seat.seatNumber === "F1" ||
                      seat.seatNumber === "G1") && (
                      <span className="text-gray-600  ">C</span>
                    )}
                    {(seat.seatNumber === "C1" ||
                      seat.seatNumber === "D1" ||
                      seat.seatNumber === "H1" ||
                      seat.seatNumber === "I1") && (
                      <span className="text-red-600 ">S</span>
                    )}
                    {(seat.seatNumber === "E1" || seat.seatNumber === "J1") && (
                      <span className="text-teal-600 ">P</span>
                    )}
                  </span>
                )}
                <span
                  onClick={
                    seat.isBooked
                      ? () => message.warning("Seat is already booked")
                      : () => onSeatHandle()
                  }
                  className={`${seat.isBooked ? "bg-red-600" : "bg-gray-600"} ${
                    ticketBookingData.selectedSeats?.includes(seat.seatNumber)
                      ? "bg-teal-600"
                      : ""
                  } p-2 m-2 rounded-t-lg text-white cursor-pointer seat`}
                >
                  {seat.seatNumber}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return <>{renderData}</>;
}
