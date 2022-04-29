import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { MovieLibrary } from "./components/MovieLibrary/MovieLibrary";

import "bootswatch/dist/zephyr/bootstrap.min.css";

export const App = () => {
  return (
    <Provider store={store}>
      <MovieLibrary />
    </Provider>
  );
};
