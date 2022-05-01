import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./moviesSlice";
import moreMoviesReducer from "./InfiniteScrollSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    moreMovies: moreMoviesReducer,
  },
});
