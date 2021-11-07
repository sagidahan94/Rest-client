import { createSlice } from "@reduxjs/toolkit";

export interface Dish {}

const dishSlice = createSlice({
  name: "dish",
  initialState: {
    dishes: [],
  },
  reducers: {
    setdish(state, action) {
      state.dishes = action.payload;
    },
  },
});

const dishActions = dishSlice.actions;

export { dishSlice, dishActions };
