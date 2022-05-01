import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./actions/moviesSlice";
import moreMoviesReducer from "./actions/InfiniteScrollSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    moreMovies: moreMoviesReducer,
  },
});
