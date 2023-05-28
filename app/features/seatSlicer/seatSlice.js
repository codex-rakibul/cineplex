import { createSlice } from "@reduxjs/toolkit";

const initialAllSeatsType = {
  classic: [],
  standard: [],
  premium: [],
};

const allSeatSlice = createSlice({
  name: "typeOfAllSeat",
  initialState: initialAllSeatsType,
  reducers: {
    addClassicSeat: (state, action) => {
      state.classic = [...state.classic, action.payload];
    },
    removeClassicSeat: (state, action) => {
      const updatedClassicSeats = state.classic.filter(
        (item) => item !== action.payload
      );
      state.classic = updatedClassicSeats;
    },
    addStandardSeat: (state, action) => {
      state.standard = [...state.standard, action.payload];
    },
    removeStandardSeat: (state, action) => {
      const updatedStandardSeats = state.standard.filter(
        (item) => item !== action.payload
      );
      state.standard = updatedStandardSeats;
    },
    addPremiumSeat: (state, action) => {
      state.premium = [...state.premium, action.payload];
    },
    removePremiumSeat: (state, action) => {
      const updatedPremiumSeats = state.premium.filter(
        (item) => item !== action.payload
      );
      state.premium = updatedPremiumSeats;
    },
  },
});

export const {
  addClassicSeat,
  addStandardSeat,
  addPremiumSeat,
  removeClassicSeat,
  removeStandardSeat,
  removePremiumSeat,
} = allSeatSlice.actions;
export default allSeatSlice.reducer;
