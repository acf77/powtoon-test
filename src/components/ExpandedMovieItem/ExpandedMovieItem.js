import { Modal } from "react-bootstrap";
import TMDBImage from "../../assets/TMDBImage";

export const ExpandedMovieItem = ({
  movie: {
    title,
    original_title,
    poster_path,
    overview,
    vote_average,
    vote_count,
  },
  show,
  onHide,
}) => (
  <Modal show={show} onHide={onHide}>
    <TMDBImage src={poster_path} className="poster" />
    <div className="description">
      <h2>
        {title}({original_title})
      </h2>
      <div>
        <h4>Rank(votes count)</h4>:{" "}
        <span>
          {vote_average}({vote_count})
        </span>
      </div>
      <span>{overview}</span>
    </div>
  </Modal>
);
