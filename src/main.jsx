import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import GlobalFonts from './styles/globalFonts.js';
import GlobalStyle from './styles/globalStyle.js';
import { ThemeProvider } from "styled-components";
import theme from './styles/theme.js';
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyle />
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </StrictMode>
);
