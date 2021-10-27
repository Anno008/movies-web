import { keyframes } from "styled-components";

const animation = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    transform: translateY(8px);
  }
  80% {
    transform: translateY(6.4px);
  }
  90% {
    transform: translateY(-6.4px);
  }
`;

const timingFunction = "cubic-bezier(0.455, 0.030, 0.515, 0.955)";

export default { animation, timingFunction };
