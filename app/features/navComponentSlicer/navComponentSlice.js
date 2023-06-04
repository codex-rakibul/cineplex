import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    componentId: null,
  };
const navComponentSlice = createSlice({
  name: "navComponentSlice",
  initialState: initialState,
  reducers: {
    addComponent: (state, action) => {
        state.componentId = action.payload;
    },
  },
});

export const { addComponent } = navComponentSlice.actions;
export default navComponentSlice.reducer;
