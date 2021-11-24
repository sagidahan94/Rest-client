import { createSlice } from "@reduxjs/toolkit";
import { Dish } from "../../api";

interface DishState {
  dish: Dish | undefined;
}

const initialState: DishState = {
  dish: undefined,
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setdish(state, action) {
      state.dish = action.payload;
    },
  },
});

const dishActions = dishSlice.actions;

export { dishSlice, dishActions };
