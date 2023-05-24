import { useState } from "react";
import { message } from "antd";

export default function SeatComponents({ allData, setAllData, row }) {
  
  const renderData = (
    <div>
      <div className="grid md:grid-cols-10 md:gap-0 grid-cols-5  gap-4 md:grid-rows-2 grid-rows-3">
        {row.map((seat, index) => {
          const [seatSelected, setSeatSeleted] = useState(false);

          const onSeatHandle = () => {
            setSeatSeleted(!seatSelected);

            if (!allData?.selectedSeats.includes(seat.seatNumber)) {
              message.success(`Your Selected Seat: "${seat.seatNumber}"`);
              setAllData((prevData) => ({
                ...prevData,
                selectedSeats: [...prevData.selectedSeats, seat.seatNumber],
              }));
            } else {
              const updatedSeats = allData?.selectedSeats.filter(
                (item) => item !== seat.seatNumber
              );

              // setAllData.selectedSeats({ arr });
              setAllData((prevData) => ({
                ...prevData,
                selectedSeats: updatedSeats,
              }));
              message.destroy(`Your Unselected seat  :  "${seat.seatNumber}"`);
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
                    allData?.selectedSeats.includes(seat.seatNumber)
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
