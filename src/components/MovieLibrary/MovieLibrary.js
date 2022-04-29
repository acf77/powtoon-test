import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTopRatedMovies } from "../../redux/actions/actions";
import { getMovies } from "../../redux/selectors";

import logo from "../../assets/logo.svg";
import "./MovieLibrary.css";

import { MoviesList } from "../MoviesList/MoviesList";

export const MovieLibrary = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, []);
  const movies = useSelector(getMovies);
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
