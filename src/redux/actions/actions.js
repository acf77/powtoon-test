import { LOAD_MOVIES } from "../../redux/constants/actionTypes";
import topRatedMovies from "../../mocks/topTatedMovies.json";

export const fetchTopRatedMovies = () => {
  return {
    type: LOAD_MOVIES,
    payload: topRatedMovies,
  };
};
