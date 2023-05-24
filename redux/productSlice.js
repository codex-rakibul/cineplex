import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  things: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchThings.fulfilled, (state, action) => {
        state.things = action.payload;
      })

      .addCase(createThings.fulfilled, (state, action) => {
        state.things.unshift(action.payload);
      })

      .addCase(updateThings.fulfilled, (state, action) => {
        state.things.find((state) => state.id === action.payload.id).title =
          action.payload.title;
      })

      .addCase(deleteThings.fulfilled, (state, action) => {
        state.things.filter((state) => state.id !== action.payload.id).title =
          action.payload.title;
      });
  },
});

//Data Read
export const fetchThings = createAsyncThunk("product/fetchThings", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  return res;
});

//Create New Data
export const createThings = createAsyncThunk(
  "product/createThings",
  async (thing) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(thing),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    return res;
  }
);

//Update old Data
export const updateThings = createAsyncThunk(
  "product/updateThings",
  async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          title: "Rakibul Islam",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.json());
    return res;
  }
);

//Delete a Data
export const deleteThings = createAsyncThunk(
  "product/deleteThings",
  async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    return res;
  }
);

export const {} = productSlice.actions;
export default productSlice.reducer;
