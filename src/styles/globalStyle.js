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
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: none;
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
  button, input, select {
    font-family: "Pretendard";
    -webkit-appearance: none; /* 웹킷 브라우저에서 기본 스타일 제거 */
    -moz-appearance: none;
    appearance: none;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .react-datepicker {
    font-size: 2.5rem;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 4rem;
    }
    @media (max-width: 480px) {
      font-size: 5rem;
    }
  }
  .react-datepicker__month {
    margin: 0.5rem 1rem;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 1.9em;
    line-height: 1.9em;
    margin: 0.166em;
  }

  .react-datepicker__current-month {
    font-size: 3rem;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 4.2rem;
    }
    @media (max-width: 480px) {
      font-size: 5.2rem;
    }
  }

  .react-datepicker__time-container {
    width: 100%;
  }

  .react-datepicker__time-list-item {
    font-size: 2.6rem;
    margin: 0;
    text-align: center;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 4.2rem;
    }
    @media (max-width: 480px) {
      font-size: 6rem;
    }
  }

  .react-datepicker__time-list {
    padding: 0;
    margin: 0;
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
