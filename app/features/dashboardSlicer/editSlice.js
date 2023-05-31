import { createSlice } from "@reduxjs/toolkit";
const initialEditState = {
  editUser: false,
  editMovie: false,
};

const editSlice = createSlice({
  name: "login",
  initialState: initialEditState,
  reducers: {
    addEdituser: (state, action) => {
      state.editUser = action.payload;
    },
    addEditMovie: (state, action) => {
        state.editMovie = action.payload;
    },
  },
});

export const {addEdituser,addEditMovie} = editSlice.actions;
export default editSlice.reducer;
