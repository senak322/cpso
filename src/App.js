import {useState} from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import "./App.css";
import book from "./images/book.jpg";
import Footer from "./components/Footer.js";
import FormContainer from "./components/FormContainer.js";
import Home from "./components/Home.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import { login } from "./utils/auth.js";
import InfoTooltip from './components/InfoTooltip.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [isAuthOk, setIsAuthOk] = useState(false);
  const history = useHistory();

  function closeAllPopups() {
    setIsInfoPopupOpen(false);
  }

  function handleAuth(bool) {
    setIsInfoPopupOpen(!isInfoPopupOpen);
    setIsAuthOk(bool);
  }

  function handleLogin(email, password) {
    login(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        handleAuth(false);
      });
  }

  return (
    <>
      <Header />
      <main className="main" style={{ backgroundImage: `url(${book})` }}>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} loggedIn={loggedIn} />
          <Route path="/login">
            <FormContainer handleLogin={handleLogin} />
            <InfoTooltip
            isOpen={isInfoPopupOpen}
            isOk={isAuthOk}
            onClose={closeAllPopups}
            message={isAuthOk ? '' : `Что-то пошло не так! Попробуйте ещё раз.`}
          />
          </Route>
          
          <Route path="*">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
