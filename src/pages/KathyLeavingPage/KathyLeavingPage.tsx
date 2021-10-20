import React, { useEffect, useState } from "react";

import { Frown } from "react-feather";
import styled from "styled-components";

import { FlexGrid, H1, H2, MainLayout } from "~/components/atoms";
import { Blink } from "~/components/atoms/Animations";

const BlinkingH2 = styled(H2)`
  animation: ${Blink.animation} 1s ${Blink.timingFunction} infinite;
`;

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (): TimeLeft | undefined => {
  const difference = +new Date(`10/29/2021`) - +new Date();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
};

const KathyLeavingPage = (): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <MainLayout>
      {!!timeLeft ? (
        <FlexGrid flexDirection="column">
          <H1>Kathy leaving</H1>
          <H2 margin="0">{timeLeft.days} days</H2>
          <H2 margin="0">{timeLeft.hours} hours</H2>
          <H2 margin="0">{timeLeft.minutes} minutes</H2>
          <BlinkingH2 margin="0">{timeLeft.seconds} seconds</BlinkingH2>
        </FlexGrid>
      ) : (
        <Frown />
      )}
    </MainLayout>
  );
};

export default KathyLeavingPage;
