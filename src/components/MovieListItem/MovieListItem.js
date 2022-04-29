import { useState } from "react";
import { Modal } from "react-bootstrap";
import TMDBImage from "../../assets/TMDBImage";
import { ExpandedMovieItem } from "../ExpandedMovieItem/ExpandedMovieItem";
import { MovieCard, MovieCardTitle } from "./styles";

export const MovieListItem = ({ movie, isSelected, onSelect }) => {
  const { title, vote_average } = movie;

  const [modalShow, setModalShow] = useState(false);

  const handleClick = () => onSelect(movie);
  const handleDismiss = () => onSelect(null);

  const handleOpenModal = () => setModalShow(true);
  const handleCloseModal = () => setModalShow(false);

  const className = `movie-list-item ${isSelected ? "selected" : ""}`;
  return (
    <MovieCard
      sm={6}
      lg={12}
      className={className}
      onClick={handleOpenModal}
      onDismiss={handleDismiss}
    >
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
