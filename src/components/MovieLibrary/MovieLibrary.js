import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/logo.svg";
import "./MovieLibrary.css";

import { getMovies } from "../../redux/selectors";
import { MoviesList } from "../MoviesList/MoviesList";
import { getMoviesList } from "../../redux/actions/moviesSlice";

export const MovieLibrary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);

  const moviesList = useSelector(getMovies);
  const { list } = moviesList;
  const movies = [...list];

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
