import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    showMenu: false,
  },
  reducers: {
    setShowMemu(state) {
      state.showMenu = !state.showMenu;
    },
  },
});

const displayActions = displaySlice.actions;

export { displaySlice, displayActions };
