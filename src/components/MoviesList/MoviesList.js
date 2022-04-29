import React, { useState } from "react";
import TMDBImage from "../../assets/TMDBImage";
import { ExpandedMovieItem } from "../ExpandedMovieItem/ExpandedMovieItem";
import { MovieListItem } from "../MovieListItem/MovieListItem";
import { SortingOptions } from "../SortingOptions/SortingOptions";
import "./styles.js";
import { Container } from "./styles.js";

export const MoviesList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortingType, setSortingType] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const handleSelectMovie = (movie) => setSelectedMovie(movie);

  const handleSortingChange = (event) => {
    setSortingType(event.target.value);
  };

  const handleOpenModal = () => {
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
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
        {movies.map((movie) => (
          <MovieListItem
            key={movie.id}
            movie={movie}
            // isSelected={selectedMovie === movie}
            onSelect={handleSelectMovie}
            onClick={handleOpenModal}
          />
        ))}
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
