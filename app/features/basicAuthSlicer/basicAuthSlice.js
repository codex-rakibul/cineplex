import { createSlice } from "@reduxjs/toolkit";

const initialLoginData = {
  loginChecked: false,
  bookingSystem: false,
  donePage: false,
  userId: "",
};

const basicAuthSlice = createSlice({
  name: "basicAuth",
  initialState: initialLoginData,
  reducers: {
    addAuth: (state, action) => {
      state.loginChecked = action.payload;
    },
    addUserAuthId: (state, action) => {
      state.userId = action.payload;
    },
    addBookingSystem: (state, action) => {
      state.bookingSystem = action.payload;
    },
    addDonePage: (state, action) => {
      state.donePage = action.payload;
    },
  },
});

export const { addAuth, addUserAuthId, addBookingSystem, addDonePage } =
  basicAuthSlice.actions;
export default basicAuthSlice.reducer;
