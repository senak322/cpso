import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CourseName from "../components/CourseName.js";
import UserHeader from "../components/UserHeader";
import BackButton from "../components/BackButton";

function StudentInfo({ courses, onChangeCourse, files, onLoading }) {
  let { id } = useParams();

  const studentEl = JSON.parse(localStorage.getItem("currentStudent"));
  console.log(studentEl);

  function havefiles(type) {
  
    function haveNeededType(el) {
      return el.type_id === type;
    }

    if (files === undefined) {
      return null;
    } else {
      return files.some(haveNeededType);
    }
    
  }

  useEffect(() => {
    onLoading(id);
  }, [id]);

  return (
    <section className="home">
      <UserHeader />
      <Link to={`/home/student${id}/register`}>
        Зарегистрировать ученика в учебной программе
      </Link>
      <div className="home__wrapper home__container">
        <BackButton />
        <h2 className="home__title home__title_type_student">
          Информация об ученике
        </h2>
        <p className="home__description">Школа: {studentEl.institution}</p>
        <p className="home__description">E-mail: {studentEl.username}</p>
        <p className="home__description">Классы: {studentEl.department}</p>
        <p className="home__description">
          Текущий класс: {studentEl.current_class}
        </p>
        <ul className="home__description">
          Доступные классы:{" "}
          {courses.courses
            ? courses.courses.map((el) => {
                return (
                  <Link
                    className="home__link"
                    to={`/home/course${el.id}`}
                    key={el.id}
                  >
                    <CourseName el={el} onChangeCourse={onChangeCourse} />
                  </Link>
                );
              })
            : "Нет доступных курсов"}
        </ul>
      </div>
      <div className="home__wrapper home__container">
        <h2 className="home__title home__title_type_student">
          Доступные справки
        </h2>
        <div className="home__files-container">
          <ul className="home__description home__description_type_files">
            <h4 className="home__title_type_student">
              Справки о прикреплении к школе:
            </h4>
            {havefiles("attach")
              ? files.map((el, index) => {
                  if (el.type_id === "attach") {
                    return (
                      <li key={index}>
                        <a className="home__link mb-2" href={el.link}>
                          {el.type}
                        </a>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })
              : "Нет доступных справок"}
          </ul>
          <ul className="home__description home__description_type_files">
            <h4 className="home__title_type_student">Справки об аттестации:</h4>
            {havefiles("attestation")
              ? files.map((el, index) => {
                  if (el.type_id === "attestation") {
                    return (
                      <li key={index}>
                        <a className="home__link mb-2" href={el.link}>
                          {el.type}
                        </a>
                      </li>
                    );
                  }
                  return null;
                })
              : "Нет доступных справок"}
          </ul>
        </div>
        <BackButton />
      </div>
    </section>
  );
}

export default StudentInfo;
