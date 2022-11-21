import {useState, useEffect} from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import "./App.css";

// import books from "./images/books.jpg";
import Footer from "./components/Footer.js";
import FormContainer from "./components/FormContainer.js";
import Home from "./components/Home.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import { login, getContent } from "./utils/auth.js";
import InfoTooltip from './components/InfoTooltip.js';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [isAuthOk, setIsAuthOk] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({})
  const history = useHistory();

  const isOpen = isInfoPopupOpen;
  const books = process.env.PUBLIC_URL + '/books.jpg'

  function closeAllPopups() {
    setIsInfoPopupOpen(false);
  }

  function handleAuth(bool) {
    setIsInfoPopupOpen(!isInfoPopupOpen);
    setIsAuthOk(bool);
  }

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      getContent(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push("/");
            setUserInfo({
              id: res.data.id,
              name: res.data.name,
              email: res.data.email
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleLogin(email, password) {
    setIsLoading(true)
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
      })
      .finally(()=>{
        setIsLoading(false)
      })
  }

  useEffect(() => {
    function closeByEscape(e) {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  // useEffect(() => {
  //   tokenCheck();
  //   if (loggedIn) {
  //     console.log(loggedIn);
  //   }
  // }, [loggedIn]);

  return (
    <>
      <Header />
      <main className="main" style={{ backgroundImage: `url(${books})` }}>
        <Switch>
          <ProtectedRoute path="/home" component={Home} loggedIn={loggedIn} />
          <Route path="/signin">
            <FormContainer handleLogin={handleLogin} isLoading={isLoading} />
            <InfoTooltip
            isOpen={isInfoPopupOpen}
            isOk={isAuthOk}
            onClose={closeAllPopups}
            message={isAuthOk ? '' : `Что-то пошло не так! Попробуйте ещё раз.`}
          />
          </Route>
          
          <Route path="*">
            {loggedIn ? <Redirect to="/home" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
