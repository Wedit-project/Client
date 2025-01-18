// styles/globalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: "Pretendard"
  }
  button {
    font-family: "Pretendard"
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media screen and (min-width: 480px) and (max-width: 1023px) {
    html {
      font-size: 34%;
    }
  }

`;

export default GlobalStyle;
