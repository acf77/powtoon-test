import { useState } from "react";
import TMDBImage from "../../assets/TMDBImage";
import { ExpandedMovieItem } from "../ExpandedMovieItem/ExpandedMovieItem";
import {
  MovieLibraryCard,
  MovieLibraryContainerImage,
} from "../MovieLibrary/styles";
import { MovieCard, MovieCardTitle } from "./styles";

export const MovieListItem = ({ movie, isSelected, onSelect }) => {
  const { title, vote_average } = movie;

  const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = () => setModalShow(true);
  const handleCloseModal = () => setModalShow(false);

  const className = `movie-list-item ${isSelected ? "selected" : ""}`;
  return (
    <MovieCard className={className} onClick={handleOpenModal}>
      <TMDBImage src={movie.poster_path} className="poster" />
      <MovieCardTitle>{title}</MovieCardTitle>
      <p>
        <strong>({vote_average})</strong>
      </p>
      <ExpandedMovieItem
        movie={movie}
        show={modalShow}
        onHide={handleCloseModal}
      />
    </MovieCard>
  );
};
