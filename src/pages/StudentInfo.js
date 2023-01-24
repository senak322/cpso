import {useEffect} from "react";
import personImg from "../images/person2.png";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import CourseName from "../components/CourseName.js";

function StudentInfo({ currentStudent, courses, onChangeCourse, files, onLoading, students }) {
  const navigate = useNavigate();

  let { id } = useParams();

  
  const studentEl = JSON.parse(localStorage.getItem("currentStudent"))
  console.log(studentEl);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    onLoading(id)
  }, [id])


  return (
    <section className="home">
      <div className="home__wrapper">
        <img className="home__user-image" src={personImg} alt="user"></img>
        <h1 className="home__user-name">
          {studentEl.lastname +  
            " " +
            studentEl.firstname +
            " " +
            studentEl.middlename}
        </h1>
      </div>

      <div className="home__wrapper home__container">
        <button className="home__back" type="button" onClick={goBack}>
          <BiArrowBack />
          Назад
        </button>
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
            {files
              ? files.map((el, index) => {
                if (el.type_id === "attach") {
                  return (
                    <li key={index}>
                      <a
                        className="home__link mb-2"
                        href={el.link}
                      >
                        {el.type}
                      </a>
                    </li>
                  );
                } return null;
              })
              : "Нет доступных справок"}
          </ul>
          <ul className="home__description home__description_type_files">
            <h4 className="home__title_type_student">Справки об аттестации:</h4>
            {files
              ? files.map((el, index) => {
                if (el.type_id === "attestation") {
                  return (
                    <li key={index}>
                      <a
                        className="home__link mb-2"

                        href={el.link}
                      >
                        {el.type}
                      </a>
                    </li>
                  );
                } return null;
              })
              : "Нет доступных справок"}
          </ul>
        </div>
        <button className="home__back" type="button" onClick={goBack}>
          <BiArrowBack />
          Назад
        </button>
      </div>
    </section>
  );
}

export default StudentInfo;
