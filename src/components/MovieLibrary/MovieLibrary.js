import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/logo.svg";
import "./MovieLibrary.css";

import { getMoreMovies, getMovies } from "../../redux/selectors";
import { MoviesList } from "../MoviesList/MoviesList";
import { getMoviesList } from "../../redux/actions/moviesSlice";

export const MovieLibrary = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(getMoviesList());
  }, []);

  const { list } = useSelector(getMovies);
  const { moreMoviesList } = useSelector(getMoreMovies);

  // const movies = [...list];

  const moviesList = moreMoviesList.length > 20 ? moreMoviesList : list;
  const movies = [...moviesList];

  return (
    <div className="MovieLibrary">
      <header className="ML-header">
        <img src={logo} className="ML-logo" alt="logo" />
        <h1 className="ML-title">Movies</h1>
      </header>
      <div className="ML-intro">
        {movies.length && <MoviesList movies={movies} />}
      </div>
    </div>
  );
};
