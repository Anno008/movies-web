import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: overlay;
  }

  *::-webkit-scrollbar {
    width: 12px;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar-track {
    ${({ theme }) => `background: ${theme.primaryBackgroundColor};`}
  }
  
  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    ${({ theme }) => `border: 3px solid ${theme.primaryBackgroundColor};`}
    ${({ theme }) => `background: ${theme.secondaryTextColor};`}
  }

  *::-webkit-scrollbar-thumb:hover {
    ${({ theme }) => `background: ${theme.primaryTextColor};`}
  }
`;

export default GlobalStyle;
