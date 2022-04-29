import React from "react";
import styled from "styled-components";

const TMDB_IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w500/";

const PosterCard = styled.img`
  /* height: 10%; */
  width: 30%;
`;

const TMDBImage = ({ src, ...restProps }) => (
  <PosterCard src={`${TMDB_IMAGE_BASE_PATH}${src}`} {...restProps} />
);

export default TMDBImage;
