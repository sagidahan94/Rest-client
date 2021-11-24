import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    showDish: false,
    isLoading: true,
  },
  reducers: {
    setShowDish(state, action) {
      state.showDish = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

const displayActions = displaySlice.actions;

export { displaySlice, displayActions };
