import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import routes from "./routes";
import Footer from "./components/footer";

import reset from './constants/css/reset';
import global from './constants/css/global';

const GlobalStyle = createGlobalStyle`${reset}${global}`;


const App = () => {
  return (
    <Router>
      <>
        <Header />

        <Main views={routes} />

        <Footer />
        <GlobalStyle />
      </>
    </Router>
  );
};

export default App;
