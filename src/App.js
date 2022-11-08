import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import './App.css';
import book from './images/book.jpg';
import Footer from './components/Footer.js';
import FormContainer from './components/FormContainer.js';
import Home from './components/Home.js';
import ProtectedRoute from './components/ProtectedRoute.js';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true)

  function handleLogin(e) {
    e.preventDefault()
  }

  return (
    <BrowserRouter>
      <Header />
      <main className="main" style={{ backgroundImage: `url(${book})` }}>
        <Switch>

          <Route exact path="/">
            <FormContainer handleLogin={handleLogin} />
          </Route>
          <ProtectedRoute path="/home"
            component={Home} loggedIn={loggedIn}
          />

        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

