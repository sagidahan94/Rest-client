import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurant: [],
  },
  reducers: {
    setrestaurant(state, action) {
      state.restaurant = action.payload;
    },
  },
});

const restaurantActions = restaurantSlice.actions;

export { restaurantSlice, restaurantActions };
