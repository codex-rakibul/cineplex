import { createSlice } from "@reduxjs/toolkit";
const initialEditState = {
  editUser: false,
  editMovie: false,
  addMovie: false,
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
    addNewMovie: (state, action) => {
      state.addMovie = action.payload;
    },
  },
});

export const { addEdituser, addEditMovie, addNewMovie } = editSlice.actions;
export default editSlice.reducer;
