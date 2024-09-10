import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '', number: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    сhangeFilter: {
      reducer(state, action) {
      state.name = action.payload;
      }
    },
  },
});


export const { сhangeFilter } = filterSlice.actions;
export const filterReducer= filterSlice.reducer;