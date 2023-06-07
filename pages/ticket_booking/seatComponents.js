import { useEffect, useState } from "react";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { seatCom } from "../../components/styleCom/totalSeatPlanStyle.js";
import {
  addSelectedSeats,
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
  const [ticketBookingLocalStorageData, setTicketBookingLocalStorageData] =
    useState();
 
  const dispatch = useDispatch();
  const ticketBookingData = useSelector((state) => state.ticketBookingReducer);
  const ticketType = useSelector((state) => state.allSeatReducer);

  useEffect(() => {
    const ticketBookingLocalStorageData = JSON.parse(
      localStorage.getItem("ticketBooking")
    );
    setTicketBookingLocalStorageData(ticketBookingLocalStorageData);
  }, [ticketBookingData,ticketType]);

  const renderData = (
    <div>
      <div className={seatCom}>
        {row?.map((seat, index) => {
          const [seatSelected, setSeatSelected] = useState(false);

          const onSeatHandle = () => {
            setSeatSelected(!seatSelected);

            if (
              !ticketBookingLocalStorageData.selectedSeats.includes(
                seat.seatNumber
              )
            ) {
              message.success(`Your Selected Seat: "${seat.seatNumber}"`);
              if (
                rowNumber === "row0" ||
                rowNumber === "row1" ||
                rowNumber === "row5" ||
                rowNumber === "row6"
              ) {
                dispatch(addClassicSeat(seat.seatNumber));
                ticketBookingLocalStorageData.classic.push(seat.seatNumber);
                localStorage.setItem(
                  "ticketBooking",
                  JSON.stringify(ticketBookingLocalStorageData)
                );
              }
              if (
                rowNumber === "row2" ||
                rowNumber === "row3" ||
                rowNumber === "row7" ||
                rowNumber === "row8"
              ) {
                dispatch(addStandardSeat(seat.seatNumber));
                ticketBookingLocalStorageData.standard.push(seat.seatNumber);
                localStorage.setItem(
                  "ticketBooking",
                  JSON.stringify(ticketBookingLocalStorageData)
                );
              }
              if (rowNumber === "row4" || rowNumber === "row9") {
                dispatch(addPremiumSeat(seat.seatNumber));
                ticketBookingLocalStorageData.premium.push(seat.seatNumber);
                localStorage.setItem(
                  "ticketBooking",
                  JSON.stringify(ticketBookingLocalStorageData)
                );
              }
              dispatch(addSelectedSeats(seat.seatNumber));
              ticketBookingLocalStorageData.selectedSeats.push(seat.seatNumber);
              localStorage.setItem(
                "ticketBooking",
                JSON.stringify(ticketBookingLocalStorageData)
              );
            } else {
              if (
                rowNumber === "row0" ||
                rowNumber === "row1" ||
                rowNumber === "row5" ||
                rowNumber === "row6"
              ) {
                dispatch(removeClassicSeat(seat.seatNumber));
                ticketBookingLocalStorageData.classic =
                  ticketBookingLocalStorageData.classic.filter(
                    (classic) => classic !== seat.seatNumber
                  );
                localStorage.setItem(
                  "ticketBooking",
                  JSON.stringify(ticketBookingLocalStorageData)
                );
              }
              if (
                rowNumber === "row2" ||
                rowNumber === "row3" ||
                rowNumber === "row7" ||
                rowNumber === "row8"
              ) {
                dispatch(removeStandardSeat(seat.seatNumber));
                ticketBookingLocalStorageData.standard =
                  ticketBookingLocalStorageData.standard.filter(
                    (standard) => standard !== seat.seatNumber
                  );
                localStorage.setItem(
                  "ticketBooking",
                  JSON.stringify(ticketBookingLocalStorageData)
                );
              }
              if (rowNumber === "row4" || rowNumber === "row9") {
                dispatch(removePremiumSeat(seat.seatNumber));
                ticketBookingLocalStorageData.premium =
                  ticketBookingLocalStorageData.premium.filter(
                    (premium) => premium !== seat.seatNumber
                  );
                localStorage.setItem(
                  "ticketBooking",
                  JSON.stringify(ticketBookingLocalStorageData)
                );
              }
              dispatch(updateSelectedSeats(seat.seatNumber));
              ticketBookingLocalStorageData.selectedSeats =
                ticketBookingLocalStorageData.selectedSeats.filter(
                  (selectedSeat) => selectedSeat !== seat.seatNumber
                );
              localStorage.setItem(
                "ticketBooking",
                JSON.stringify(ticketBookingLocalStorageData)
              );
            }
          };

          return (
            <div className="" key={index}>
              <div className="seatBorder">
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
                    ticketBookingLocalStorageData?.selectedSeats.includes(
                      seat.seatNumber
                    )
                      ? "bg-teal-600"
                      : ""
                  }  md:text-md text-sm p-2 md:p-2  m-2 rounded-t-lg text-white cursor-pointer seat`}
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
