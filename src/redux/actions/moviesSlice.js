import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMoviesList = createAsyncThunk("movies/getMovies", async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?release_date=2022-01-01&api_key=54ffed57deb5a7a8688be4de3007e578"
  );
  return data.results;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    status: null,
  },

  extraReducers: {
    [getMoviesList.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMoviesList.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getMoviesList.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default moviesSlice.reducer;
