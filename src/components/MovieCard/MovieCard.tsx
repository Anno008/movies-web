import React from "react";

import styled from "styled-components";

import { FlexGrid, Paragraph } from "~/components/atoms";
import { imageEndpoint } from "~/constants/Config";
import locators from "~/testUtils/locators";
import { setTestId } from "~/testUtils/setTestId";
import { Movie } from "~/types";

const borderRadius = "20px";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: ${borderRadius};
  box-sizing: border-box;
  transition: all 0.35s ease-in-out;

  &&:hover {
    transform: scale(1.2);
  }
`;

const MovieCard: React.FC<Movie> = ({ title, backdrop_path, id, poster_path }) => (
  <FlexGrid
    flexDirection="column"
    position="relative"
    height="280px"
    overflow="hidden"
    borderRadius={borderRadius}
    {...setTestId(`${locators.movieCard}-${id}`)}
    useBoxShadow>
    <Paragraph margin="10px" bold zIndex="1" useTextShadow>
      {title}
    </Paragraph>
    <StyledImage src={`${imageEndpoint}w500/${backdrop_path || poster_path}`} />
  </FlexGrid>
);

export default MovieCard;
