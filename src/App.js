import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import SignIn from "./pages/SignIn.js";
import InfoTooltip from "./components/InfoTooltip.js";
import AddStudentPopup from "./components/AddStudentPopup.js";
import DeleteStudentPopup from "./components/DeleteStudentPopup.js";
import Home from "./pages/Home.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import { login, getContent, addStudent, deleteStudent } from "./utils/auth.js";
import { CurrentUserContext } from "./contexts/CurrentUserContext.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [isAuthOk, setIsAuthOk] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errMesaage, setErrMessage] = useState("");
  const [students, setStudents] = useState([]);
  const [isAddStudentPopupOpen, setAddStudentPopupOpen] = useState(false);
  const [isDeleteStudentPopupOpen, setIsDeleteStudentPopupOpen] =
    useState(false);
  const [isAddOk, setIsAddOk] = useState(true);
  const [addErr, setAddErr] = useState("");
  const history = useHistory();

  const isOpen =
    isInfoPopupOpen || isAddStudentPopupOpen || isDeleteStudentPopupOpen;
  const books = process.env.PUBLIC_URL + "/books.jpg";

  function closeAllPopups() {
    setIsInfoPopupOpen(false);
    setAddStudentPopupOpen(false);
    setAddErr("");
    setIsAddOk(true);
    setIsDeleteStudentPopupOpen(false);
  }

  function openAddStudentsPopup() {
    setAddStudentPopupOpen(true);
  }

  function openDeleteStudentsPopup() {
    setIsDeleteStudentPopupOpen(true);
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
            history.push("/home");
            setCurrentUser({
              id: res.data.id,
              name: res.data.name,
              email: res.data.email,
            });
            setStudents(res.students);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    login(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          history.push("/home/user-info");
        }
      })
      .catch((err) => {
        console.log(err);
        handleAuth(false);
        setErrMessage(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("token");
  }

  function handleAddStudent(email) {
    addStudent(email, currentUser.id)
      .then((res) => {
        if (res.ok) {
          setIsAddOk(true);
          setIsAddOk(false);
          setAddErr(res.message);
          closeAllPopups();
        }
      })
      .catch((err) => {
        console.log(err);
        setIsAddOk(false);
        setAddErr(err);
      });
  }

  function handleDeleteStudent(studentId) {
    setIsLoading(true)
    deleteStudent(studentId, currentUser.id)
      .then((res) => {
        if (res.ok) {
          console.log(res);
          closeAllPopups();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
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

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} onLogout={handleLogout} />
      <main
        className={`main ${loggedIn ? "main__loggined" : ""}`}
        style={{ backgroundImage: `url(${books})` }}
      >
        <Switch>
          <CurrentUserContext.Provider value={currentUser}>
            <ProtectedRoute
              path="/home"
              component={Home}
              students={students}
              loggedIn={loggedIn}
              onOpenAddStudents={openAddStudentsPopup}
              onOpenDelete={openDeleteStudentsPopup}
            />

            <Route path="/signin">
              <SignIn handleLogin={handleLogin} isLoading={isLoading} />
            </Route>

            <Route path="/">
              {loggedIn ? (
                <Redirect to="/home/user-info" />
              ) : (
                <Redirect to="/signin" />
              )}
            </Route>
          </CurrentUserContext.Provider>
        </Switch>
      </main>
      <Footer />
      <AddStudentPopup
        isOpen={isAddStudentPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleAddStudent}
        isAddOk={isAddOk}
        addErr={addErr}
      />
      <DeleteStudentPopup
        isOpen={isDeleteStudentPopupOpen}
        onClose={closeAllPopups}  
        onSubmit={handleDeleteStudent}
        isLoading={isLoading}
      />
      <InfoTooltip
        isOpen={isInfoPopupOpen}
        isOk={isAuthOk}
        onClose={closeAllPopups}
        message={isAuthOk ? "" : errMesaage}
      />
    </>
  );
}

export default App;
