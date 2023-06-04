import { createSlice } from "@reduxjs/toolkit";
import { homeData } from "../../../dummyData/dummyData";

const initialState = {
  allMovieData: homeData,
  editMovieData: {},
  newMovieData: {},
};

const allMovieSlice = createSlice({
  name: "allMovieSlice",
  initialState: initialState,
  reducers: {
    addMovie: (state, action) => {
      state.allMovieData.push(action.payload);
    },
    addEditMovieData: (state, action) => {
      state.editMovieData = action.payload;
    },
    updateEditMovieData: (state, action) => {
      const { fieldName, fieldValue } = action.payload;
      state.editMovieData[fieldName] = fieldValue;
    },
    updateAllMovie: (state, action) => {
      const updatedMovie = action.payload;
      const index = state.allMovieData.findIndex(
        (movie) => movie.id === updatedMovie.id
      );
      if (index !== -1) {
        state.allMovieData[index] = updatedMovie;
      }
    },
    deleteMovie: (state, action) => {
      const movieId = action.payload;
      state.allMovieData = state.allMovieData.filter(
        (movie) => movie.id !== movieId
      );
    },
    addSingleNewMovie: (state, action) => {
      const { fieldName, fieldValue } = action.payload;
      state.newMovieData = {
        ...state.newMovieData,
        [fieldName]: fieldValue,
      };
    },
    addNewMovieData: (state, action) => {
      const newMovie = action.payload;
      state.allMovieData = [...state.allMovieData, newMovie];
    },
  },
});

export const {
  addMovie,
  addEditMovieData,
  updateEditMovieData,
  updateAllMovie,
  deleteMovie,
  addSingleNewMovie,
  addNewMovieData,
} = allMovieSlice.actions;
export default allMovieSlice.reducer;
