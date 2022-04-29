import { LOAD_MOVIES } from "../../redux/constants/actionTypes";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MOVIES:
      return [...initialState, ...payload];

    default:
      return state;
  }
}
