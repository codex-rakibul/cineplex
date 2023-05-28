import { configureStore } from "@reduxjs/toolkit";
import ticketBookingReducer from "../features/ticketBookingSlicer/ticketBookingSlice";
import loginReducer from "../features/loginSlicer/loginSlice";
import basicAuthReducer from "../features/basicAuthSlicer/basicAuthSlice";
import allSeatReducer from "../features/seatSlicer/seatSlice"

const store = configureStore({
  reducer: {
    ticketBookingReducer: ticketBookingReducer,
    loginReducer: loginReducer,
    basicAuthReducer: basicAuthReducer,
    allSeatReducer: allSeatReducer,
  },
});

export default store;
