import { createSlice } from "@reduxjs/toolkit";

const initialLoginData = {
  loginChecked: false,
  userId: "",
};

const basicAuthSlice = createSlice({
  name: "basicAuth",
  initialState: initialLoginData,
  reducers: {
    addAuth: (state, action) => {
      state.loginChecked = action.payload;
    },
    addUserAuthId:(state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { addAuth,addUserAuthId } = basicAuthSlice.actions;
export default basicAuthSlice.reducer;
