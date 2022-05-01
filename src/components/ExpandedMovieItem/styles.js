import { Card } from "react-bootstrap";
import TMDBImage from "../../assets/TMDBImage";

import styled from "styled-components";

export const Container = styled(Card)`
  background-color: black;
`;

export const ModalImage = styled(TMDBImage)`
  margin-top: 15%;
  padding: 6% 4%;
  align-self: center;
  width: 38%;
  position: absolute;
`;
export const ModalBackdrop = styled(TMDBImage)`
  align-self: center;
  width: 100%;
  opacity: 75%;
`;

export const ModalTitle = styled.h4`
  text-align: center;
  padding: 3% 5%;
  margin-top: 10%;
  color: #f3f3f3;
`;

export const ModalRank = styled.h6`
  text-align: center;
  color: #f3f3f3;
`;
export const ModalDescription = styled.p`
  text-align: justify;
  padding: 3% 5%;
  color: #f3f3f3;
`;
