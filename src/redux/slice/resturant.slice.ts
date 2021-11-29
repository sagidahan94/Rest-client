import { createSlice } from "@reduxjs/toolkit";

const initialeMap = function (): Map<string, []> {
  const map = new Map();
  map.set("All", []);
  map.set("New", []);
  map.set("Open", []);
  map.set("Popular", []);
  return map;
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurants: initialeMap(),
  },
  reducers: {
    setrestaurant(state, action) {
      state.restaurants = action.payload;
    },
  },
});

const restaurantActions = restaurantSlice.actions;

export { restaurantSlice, restaurantActions };
