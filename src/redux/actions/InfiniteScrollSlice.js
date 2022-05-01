import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMoreMoviesList = createAsyncThunk(
  "movies/getMoreMovies",
  async ({ movies, pageNumber }) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?release_date=2022-01-01&page=${pageNumber}&api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    const infiniteMovieList = data.results;

    return movies.concat(infiniteMovieList);
  }
);

const moreMoviesSlice = createSlice({
  name: "moreMovies",
  initialState: {
    moreMoviesList: [],
    status: null,
  },

  extraReducers: {
    [getMoreMoviesList.pending]: (state) => {
      state.status = "loading";
    },
    [getMoreMoviesList.fulfilled]: (state, { payload }) => {
      state.moreMoviesList = payload;
      state.status = "success";
    },
    [getMoreMoviesList.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default moreMoviesSlice.reducer;
