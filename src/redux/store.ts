import { configureStore } from "@reduxjs/toolkit";
import { dishSlice } from "./slice/dish.slice";
import { displaySlice } from "./slice/display-slice";
import { restaurantSlice } from "./slice/resturant.slice";

export const store = configureStore({
  reducer: {
    display: displaySlice.reducer,
    dish: dishSlice.reducer,
    restaurants: restaurantSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
