import { allUserLoginData } from "@/dummyData/allUserData";
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: allUserLoginData,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = loginSlice.actions;
export default loginSlice.reducer;
