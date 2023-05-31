import { createSlice } from "@reduxjs/toolkit";
import { homeData } from "../../../dummyData/dummyData";

const initialState = {
    allMovieData: homeData,
    editMovieData: [],
  };
const allMovieSlice = createSlice({
  name: "allMovieSlice",
  initialState: initialState,
  reducers: {
    addMovie: (state, action) => {
      state.allMovieData.push(action.payload);
    },
    addEditMovieData:(state, action) => {
       state.editMovieData.push(action.payload);
    }
  },
});

export const { addMovie,addEditMovieData} = allMovieSlice.actions;
export default allMovieSlice.reducer;
