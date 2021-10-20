import { HTMLProps } from "react";

import styled, { css } from "styled-components";

interface Props extends HTMLProps<HTMLButtonElement> {
  margin?: string;
  variant?: "primary" | "secondary";
}

export const Button = styled.button<Props>`
  background-color: transparent;
  border: 1px solid black;
  ${({ variant }) => variant === "primary" && primaryButton}
`;

const primaryButton = css`
  background-color: red;
  color: white;
`;
