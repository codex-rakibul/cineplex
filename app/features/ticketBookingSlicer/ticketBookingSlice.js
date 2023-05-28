import { createSlice} from "@reduxjs/toolkit";

const initialBookingData = {
  selectShowtime: "",
  date: "",
  selectedSeats: [],
  totalPrice: 0,
  totalSeats: 0,
  Sprice: 100,
  Pprice: 200,
  Cprice: 300,
  userId: "",
};

const ticketBookingSlice = createSlice({
  name: "ticketBooking",
  initialState: initialBookingData,
  reducers: {
    showTicketBookingData: (state) => state,
    addDate: (state, action) => {
      state.date = action.payload;
    },
    addSelectShowtime: (state, action) => {
      state.selectShowtime = action.payload;
    },
    addSelectedSeats: (state, action) => {
      state.selectedSeats = [...state.selectedSeats, action.payload];
    },
    updateSelectedSeats: (state, action) => {
      const updatedSeats = state.selectedSeats.filter(
        (item) => item !== action.payload
      );
      state.selectedSeats = updatedSeats;
    },
    addTotalPrice:(state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const {
  showTicketBookingData,
  addDate,
  addSelectShowtime,
  addSelectedSeats,
  updateSelectedSeats,
  addTotalPrice,
} = ticketBookingSlice.actions;
export default ticketBookingSlice.reducer;
