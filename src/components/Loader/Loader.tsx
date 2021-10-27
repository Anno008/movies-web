import React from "react";

import styled from "styled-components";

import { ShakeUpDown } from "../atoms/Animations";

const Container = styled.div`
  display: flex;
  gap: 10px;

  > div {
    animation: ${ShakeUpDown.animation} 2s ${ShakeUpDown.timingFunction} infinite;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }
`;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  opacity: 0.8;
  ${({ theme }) => `background-color: ${theme.secondaryBackgroundColor};`}
  ${({ theme }) => `box-shadow: 0 0px 4px 1px ${theme.shadowColor};`}
  border-radius: 50%;
`;

const Loader: React.FC = () => (
  <Container>
    <Dot />
    <Dot />
    <Dot />
  </Container>
);

export default Loader;
