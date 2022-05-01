import styled from "styled-components";

import TMDBImage from "../../assets/TMDBImage";

export const MovieLibraryContainer = styled.div`
  text-align: center;
`;

export const MovieLibraryContainerTitle = styled.h3`
  text-align: center;
  text-shadow: 1px 1px #333;
  color: #f7f7f7;
  position: absolute;
  left: 30%;
  top: 30%;
`;
export const MovieLibraryContainerSubtitle = styled.h6`
  text-align: center;
  text-shadow: 1px 1px #333;
  color: #f7f7f7;
  position: absolute;
  left: 30%;
  top: 35%;
`;

export const MovieLibraryContainerImage = styled(TMDBImage)`
  align-self: center;
  width: 50%;
`;

export const MovieLibraryCard = styled.header`
  background-color: #222;
  height: 50%;
`;

export const MovieCardTitle = styled.p`
  color: #f2f2f2;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  justify-content: center;
  padding: 5% 0 0 0;
`;
