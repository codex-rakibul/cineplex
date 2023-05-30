import { allUserLoginData } from "@/dummyData/allUserData";
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: allUserLoginData,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUserStatus: (state, action) => {
      const { email, password, status } = action.payload;
      const user = state.find((user) => user.email === email && user.password === password);
      if (user) {
        user.status = status;
      }
    },
  },
});

export const { addUser,updateUserStatus } = loginSlice.actions;
export default loginSlice.reducer;
