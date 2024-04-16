import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { GlobalStyles, theme } from './styles';
import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollToTop from './ScroleTop';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router basename="/Ucluverse">
          <ScrollToTop />
          <App />
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
