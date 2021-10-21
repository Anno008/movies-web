import styled from "styled-components";

// hardcoded for now
export const CssGrid = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 624px) {
    grid-template-columns: 1fr;
  }
`;
