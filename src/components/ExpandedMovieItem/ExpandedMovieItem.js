import { Modal } from "react-bootstrap";
import TMDBImage from "../../assets/TMDBImage";

import {
  Container,
  ModalTitle,
  ModalRank,
  ModalDescription,
  ModalImage,
  ModalBackdrop,
} from "./styles";

export const ExpandedMovieItem = ({
  movie: {
    title,
    original_title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    backdrop_path,
    release_date,
  },
  show,
  onHide,
}) => (
  <Modal show={show} onHide={onHide}>
    <Container>
      <ModalBackdrop lazy src={backdrop_path} />
      <ModalImage src={poster_path} />
      <div className="description">
        <ModalTitle>
          {title} ({original_title})
        </ModalTitle>
        <ModalRank>
          {vote_average} ({vote_count} votes) | {release_date}
        </ModalRank>
        <ModalDescription>{overview}</ModalDescription>
      </div>
    </Container>
  </Modal>
);
