import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  overflow: overlay;

}
  html, body, #root {
      margin: 0;
      padding: 0;
      height: 100%;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1; 
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
