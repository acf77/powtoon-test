import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { getMoreMoviesList } from "../../redux/actions/InfiniteScrollSlice";

import { ExpandedMovieItem } from "../ExpandedMovieItem/ExpandedMovieItem";
import { MovieListItem } from "../MovieListItem/MovieListItem";
import { SortingOptions } from "../SortingOptions/SortingOptions";

import "./styles.js";
import { Container } from "./styles.js";

export const MoviesList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortingType, setSortingType] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [pageNumber, setPageNumber] = useState(2);

  const dispatch = useDispatch();

  const handleSelectMovie = (movie) => setSelectedMovie(movie);

  const handleSortingChange = (event) => {
    setSortingType(event.target.value);

    switch (event.target.value) {
      case "name_asc":
        movies.sort((a, b) => {
          let x = a.original_title;
          let y = b.original_title;
          return x === y ? 0 : x > y ? 1 : -1;
        });
        break;
      case "name_desc":
        movies.sort((a, b) => {
          let x = a.original_title;
          let y = b.original_title;
          return x === y ? 0 : x < y ? 1 : -1;
        });
        break;
      case "rating_high":
        movies.sort((a, b) => {
          return b.vote_average - a.vote_average;
        });
        break;
      case "rating_low":
        movies.sort((a, b) => {
          return a.vote_average - b.vote_average;
        });
        break;
      default:
        return;
    }
  };

  const handleOpenModal = () => {
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleMoreMovies = () => {
    dispatch(getMoreMoviesList({ movies, pageNumber }));
    setPageNumber(pageNumber + 1);
  };

  return (
    <Container>
      <div className="items">
        <div>
          <span>Sort by:</span>
          <SortingOptions
            selectedOption={sortingType}
            onChange={handleSortingChange}
          />
        </div>
        <InfiniteScroll
          dataLength={movies.length}
          next={handleMoreMovies}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {movies.map((movie) => (
            <MovieListItem
              key={movie.id}
              movie={movie}
              // isSelected={selectedMovie === movie}
              onSelect={handleSelectMovie}
              onClick={handleOpenModal}
            />
          ))}
        </InfiniteScroll>
      </div>
      {selectedMovie && (
        <ExpandedMovieItem
          show={modalShow}
          onHide={handleCloseModal}
          movie={selectedMovie}
        />
      )}
    </Container>
  );
};
