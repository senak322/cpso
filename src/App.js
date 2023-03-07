import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SpinnerMain from "./components/SpinnerMain.js";
import books from "./images/books.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Settings from "./pages/Settings.js";
import UserInfo from "./pages/UserInfo.js";
import StudentInfo from "./pages/StudentInfo.js";
import ClassStatus from "./pages/ClassStatus.js";
import SignIn from "./pages/SignIn.js";
import Register from "./pages/Register.js";
import InfoTooltip from "./components/InfoTooltip.js";
import AddStudentPopup from "./components/AddStudentPopup.js";
import DeleteStudentPopup from "./components/DeleteStudentPopup.js";
import EditNamePopup from "./components/EditNamePopup.js";
import EditPasswordPopup from "./components/EditPasswordPopup.js";
import Home from "./pages/Home.js";
import CourseInfo from "./pages/CourseInfo.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import RegisterStudent from "./pages/RegisterStudent";
import RegisterStudentForm from "./pages/RegisterStudentForm";
import RegisterStudentDocuments from "./pages/RegisterStudentDocuments";
import {
  login,
  getContent,
  addStudent,
  deleteStudent,
  register,
  updateUser,
  getCourses,
  getGrades,
  getFiles,
  getCourseFiles,
} from "./utils/auth.js";
import { CurrentUserContext } from "./contexts/CurrentUserContext.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [isAuthOk, setIsAuthOk] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentStudent, setCurrentStudent] = useState({});
  const [courses, setCourses] = useState({});
  const [errMesaage, setErrMessage] = useState("");
  const [students, setStudents] = useState([]);
  const [isAddStudentPopupOpen, setAddStudentPopupOpen] = useState(false);
  const [isDeleteStudentPopupOpen, setIsDeleteStudentPopupOpen] =
    useState(false);
  const [isEditNamePopupOpen, setIsEditNamePopupOpen] = useState(false);
  const [isEditPasswordPopupOpen, setIsEditPasswordPopupOpen] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [isAddOk, setIsAddOk] = useState(true);
  const [addErr, setAddErr] = useState("");
  const [grades, setGrades] = useState([]);
  const [files, setFiles] = useState([]);
  const [courseFiles, setCourseFiles] = useState([]);
  const history = useNavigate();

  const isOpen =
    isInfoPopupOpen ||
    isAddStudentPopupOpen ||
    isDeleteStudentPopupOpen ||
    isDeleteStudentPopupOpen ||
    isEditPasswordPopupOpen;

  function closeAllPopups() {
    setIsInfoPopupOpen(false);
    setAddStudentPopupOpen(false);
    setAddErr("");
    setIsAddOk(true);
    setIsDeleteStudentPopupOpen(false);
    setIsEditNamePopupOpen(false);
    setIsEditPasswordPopupOpen(false);
  }

  function openAddStudentsPopup() {
    setAddStudentPopupOpen(true);
  }

  function openDeleteStudentsPopup(id) {
    setIsDeleteStudentPopupOpen(true);
    setStudentId(id);
  }

  function openEditNamePopup() {
    setIsEditNamePopupOpen(true);
  }

  function openEditPasswordPopup() {
    setIsEditPasswordPopupOpen(true);
  }

  function handleGetCourses(studentId) {
    getCourses(studentId).then((res) => {
      console.log(res);
      setCourses(res);
    });
  }

  function handleGetFiles(id) {
    getFiles(id).then((res) => {
      console.log(res);
      setFiles(res.files);
    });
  }

  function changeStudent(el) {
    setCurrentStudent(el);
    console.log(el);
    localStorage.setItem("currentStudent", JSON.stringify(el));
    getCoursesAndFiles(el.id);
    // handleGetCourses(el.id);
    // handleGetFiles(el.id);
  }

  function getCoursesAndFiles(id) {
    handleGetCourses(id);
    handleGetFiles(id);
  }

  // const cbTokenCheck = useCallback(() => {
  //   setPageLoading(true);
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     throw new Error("No token in storage");
  //   }

  //   getContent(token)
  //     .then((res) => {
  //       if (res) {
  //         setLoggedIn(true);
  //         history("/home/user-info");
  //         setCurrentUser({
  //           id: res.data.id,
  //           name: res.data.name,
  //           email: res.data.email,
  //         });
  //         setStudents(res.students);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setPageLoading(false);
  //     })

  // }, []);

  function tokenCheck() {
    setPageLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      getContent(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);

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
        })
        .finally(() => {
          setPageLoading(false);
        });
    } else {
      setPageLoading(false);
    }
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    login(email, password)
      .then((res) => {
        if (res.token) {
          tokenCheck();
          setLoggedIn(true);
          history("/home/user-info");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsAuthOk(false);
        setIsInfoPopupOpen(true);
        setErrMessage(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleRegister(name, email) {
    setIsLoading(true);
    register(name, email)
      .then((res) => {
        history("/signin");
        console.log(res);
      })
      .catch((err) => {
        setIsAuthOk(false);
        setIsInfoPopupOpen(true);
        setErrMessage(err);
        console.log(err);
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
        tokenCheck();
        setAddErr(res.message);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
        setIsAddOk(false);
        setAddErr(err);
      });
  }

  function handleDeleteStudent() {
    setIsLoading(true);
    deleteStudent(studentId, currentUser.id)
      .then((res) => {
        tokenCheck();
        console.log(res.message);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleEditName(values) {
    const token = localStorage.getItem("token");
    updateUser(values.name, values.email, "", token)
      .then((res) => {
        console.log(res.message);
        // cbTokenCheck();
        tokenCheck();
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
        setAddErr(err);
      });
  }

  function handleEditPassword(values) {
    const token = localStorage.getItem("token");

    updateUser(currentUser.name, currentUser.email, values.password, token)
      .then((res) => {
        console.log(res.message);
        // cbTokenCheck();
        tokenCheck();
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
        setAddErr(err);
      });
  }

  function handleGetGrades(studentId, courseId) {
    getGrades(studentId, courseId)
      .then((res) => {
        console.log(res);
        setGrades(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleGetCourseFiles(studentId, courseNum) {
    getCourseFiles(studentId, courseNum)
      .then((res) => {
        console.log(res);
        setCourseFiles(res.files);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function changeCourse(el) {
    localStorage.setItem("currentCourse", JSON.stringify(el));
    getGradesAndFiles(el);
  }

  function getGradesAndFiles(el, id) {
    const studentEl = JSON.parse(localStorage.getItem("currentStudent"));
    console.log(studentEl);
    handleGetGrades(studentEl.id, id);
    handleGetCourseFiles(studentEl.id, el.class_number);
  }

  // function changeStudent(el) {
  //   setCurrentStudent(el);
  //   console.log(el);
  //   localStorage.setItem("currentStudent", JSON.stringify(el));
  //   getCoursesAndFiles(el.id);
  //   // handleGetCourses(el.id);
  //   // handleGetFiles(el.id);
  // }

  // function getCoursesAndFiles(id) {
  //   handleGetCourses(id);
  //   handleGetFiles(id);
  // }

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

  if (pageLoading) {
    return <SpinnerMain />;
  }

  return (
    <>
      <Header loggedIn={loggedIn} onLogout={handleLogout} />

      <main
        className={`main ${loggedIn ? "main__loggined" : ""}`}
        style={{ backgroundImage: `url(${books})` }}
      >
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Home />
                </ProtectedRoute>
              }
            >
              <Route
                path="user-info"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <UserInfo
                      students={students}
                      onOpenAddStudents={openAddStudentsPopup}
                      onOpenDelete={openDeleteStudentsPopup}
                      onChangeStudent={changeStudent}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="student:id"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <StudentInfo
                      currentStudent={currentStudent}
                      courses={courses}
                      onChangeCourse={changeCourse}
                      files={files}
                      onLoading={getCoursesAndFiles}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="class:id"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <ClassStatus />
                  </ProtectedRoute>
                }
              />
              <Route
                path="registerstudent"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <RegisterStudent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="form"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <RegisterStudentForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="form-documents"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <RegisterStudentDocuments />
                  </ProtectedRoute>
                }
              />
              <Route
                path="course:classid"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <CourseInfo
                      currentStudent={currentStudent}
                      getGrades={handleGetGrades}
                      grades={grades}
                      files={courseFiles}
                      onLoading={getGradesAndFiles}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                path="settings"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Settings
                      onOpenEditName={openEditNamePopup}
                      onOpenEditPassword={openEditPasswordPopup}
                    />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="/signin"
              element={
                <SignIn
                  handleLogin={handleLogin}
                  isLoading={isLoading}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  handleRegister={handleRegister}
                  isLoading={isLoading}
                />
              }
            />

            <Route
              path="/"
              element={
                loggedIn ? (
                  <Navigate to="/home/user-info" />
                ) : (
                  <Navigate to="/signin" />
                )
              }
            />
            <Route
              path="*"
              element={
                loggedIn ? (
                  <Navigate to="/home/user-info" />
                ) : (
                  <Navigate to="/signin" />
                )
              }
            />
          </Routes>
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
          <EditNamePopup
            isOpen={isEditNamePopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleEditName}
            addErr={addErr}
          />

          <EditPasswordPopup
            isOpen={isEditPasswordPopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleEditPassword}
            addErr={addErr}
          />
          <InfoTooltip
            isOpen={isInfoPopupOpen}
            isOk={isAuthOk}
            onClose={closeAllPopups}
            message={isAuthOk ? "" : errMesaage}
          />
        </CurrentUserContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default App;
