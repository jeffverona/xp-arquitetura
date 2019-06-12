import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import routes from './routes';
import reset from './constants/css/reset';
import global from './constants/css/global';

const GlobalStyle = createGlobalStyle`${reset}${global}`;

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />

        <Main views={routes} />

        <Footer />
        <GlobalStyle />
      </Fragment>
    </Router>
  );
};

render(
  <App />,
  document.getElementById('app')
);
