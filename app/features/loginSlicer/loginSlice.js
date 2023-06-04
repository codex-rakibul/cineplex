import { allUserLoginData } from "@/dummyData/allUserData";
import { createSlice } from "@reduxjs/toolkit";

const initialAllUserData = {
  allUserData: allUserLoginData,
  editUser: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialAllUserData,
  reducers: {
    addUser: (state, action) => {
      state.allUserData.push(action.payload);
    },
    updateUserStatus: (state, action) => {
      const { email, password, status } = action.payload;
      const user = state.allUserData.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        user.status = status;
      }
    },
    addEditUser: (state, action) => {
      state.editUser = action.payload;
    },
    updateEditUser: (state, action) => {
      const { fieldName, fieldValue } = action.payload;
      state.editUser[fieldName] = fieldValue;
    },
    updateAllUser: (state, action) => {
      const updateUser = action.payload;
      const index = state.allUserData.findIndex(
        (user) => user.userId === updateUser.userId
      );
      if (index !== -1) {
        state.allUserData[index] = updateUser;
      }
    },
    deleteUser: (state, action) => {
      const userData = action.payload;
      state.allUserData = state.allUserData.filter(
        (user) => user.userId !== userData
      );
    },
  },
});

export const {
  addUser,
  updateUserStatus,
  addEditUser,
  updateEditUser,
  updateAllUser,
  deleteUser
} = loginSlice.actions;
export default loginSlice.reducer;
