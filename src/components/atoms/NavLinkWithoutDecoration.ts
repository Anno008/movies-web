import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLinkWithoutDecoration = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
    a,
    a:visited,
    a:hover,
    a:active {
      text-decoration: none;
      color: inherit;
    }
  }
`;
