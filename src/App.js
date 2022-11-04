import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;

