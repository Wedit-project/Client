// styles/globalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: "Pretendard"
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    html {
      font-size: 62.5%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    html {
      font-size: 62.5%;
    }
  }

  @media (min-width: 600px) and (max-width: 768px) and (orientation: portrait) {
    html {
      font-size: 62.5%;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) and (orientation: landscape) {
    html {
      font-size: 62.5%;
    }
  }

  @media (max-width: 479px) and (orientation: portrait) {
    html {
      font-size: 62.5%;
    }
  }
`;

export default GlobalStyle;
