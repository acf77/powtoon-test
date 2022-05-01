import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  MovieLibraryCard,
  MovieLibraryContainer,
  MovieLibraryContainerImage,
  MovieLibraryContainerTitle,
  MovieLibraryContainerSubtitle,
} from "./styles";

import { getMoreMovies, getMovies } from "../../redux/selectors";
import { MoviesList } from "../MoviesList/MoviesList";
import { getMoviesList } from "../../redux/moviesSlice";

export const MovieLibrary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
  }, []);

  const initalMovies = useSelector(getMovies);
  const { moreMoviesList } = useSelector(getMoreMovies);

  const moviesList =
    moreMoviesList.length > 20 ? moreMoviesList : initalMovies.list;
  const movies = [...moviesList];

  const randomNumber = Math.floor(Math.random() * (20 - 0) + 0);

  return (
    <MovieLibraryContainer>
      {initalMovies.status === "loading" ? (
        <span>Loading...</span>
      ) : (
        movies.length && (
          <MovieLibraryCard>
            <MovieLibraryContainerTitle>
              {initalMovies.list[randomNumber].original_title}
            </MovieLibraryContainerTitle>
            <MovieLibraryContainerSubtitle>
              Rating {initalMovies.list[randomNumber].vote_average} (
              {initalMovies.list[randomNumber].release_date.slice(0, 4)})
            </MovieLibraryContainerSubtitle>
            <MovieLibraryContainerImage
              loading="lazy"
              src={initalMovies.list[randomNumber].backdrop_path}
            />
          </MovieLibraryCard>
        )
      )}
      {movies.length && <MoviesList movies={movies} />}
    </MovieLibraryContainer>
  );
};
