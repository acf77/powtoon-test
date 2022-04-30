import styled from "styled-components";

export const MovieCard = styled.div`
  border-radius: 2%;
  max-width: 20%;
  display: inline-block;
  margin: 1%;
  padding: 1%;
  cursor: pointer;
  background-color: #222;
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
