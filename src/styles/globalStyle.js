// styles/globalStyle.js
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

${reset}
  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color:rgba(255,255,255,0);
    -webkit-touch-callout:none;
    user-select:none;
  }

  button {
    cursor: pointer;
    padding: 0;
    margin: 0;
    background: none;
    border: none;

    &:hover {
      border: none;
      outline: none;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }

  :root {
    --vh: 100%;
  }

  html, body {
    overflow-x: hidden;

  }

  ::-webkit-scrollbar {
    display: none;
  }

  #root, body, html {
    margin: 0 auto;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    font-family: "Pretendard"
  }
  button {
    font-family: "Pretendard";
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    html {
      font-size: 51%;
    }
  }

     @media screen and (min-width: 768px) and (max-width: 1024px) {
    html {
      font-size: 34%;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    html {
      font-size: 24.5%;
    }
  }

  @media screen and (max-width: 480px) {
    html {
      font-size: 15%;
    }
  }
`;

export default GlobalStyle;
