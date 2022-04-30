import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./actions/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
