import React from "react";
import personImg from "../images/person2.png";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import CourseName from '../components/CourseName.js';

function StudentInfo({ currentStudent, courses, onChangeCourse, files }) {
  const navigate = useNavigate();
  

  const goBack = () => {
    navigate(-1);
  };

  console.log(currentStudent);

  return (
    <section className="home">
      <div className="home__wrapper">
        <img className="home__user-image" src={personImg} alt="user"></img>
        <h1 className="home__user-name">
          {currentStudent.lastname +
            " " +
            currentStudent.firstname +
            " " +
            currentStudent.middlename}
        </h1>
      </div>
      <div className="home__wrapper home__container">
        <h2 className="home__title home__title_type_student">
          Информация об ученике
        </h2>
        <p className="home__description">Школа: {currentStudent.institution}</p>
        <p className="home__description">E-mail: {currentStudent.username}</p>
        <p className="home__description">Классы: {currentStudent.department}</p>
        <p className="home__description">
          Текущий класс: {currentStudent.current_class}
        </p>
        <ul className="home__description">
          Доступные классы:{" "}
          {courses.courses
            ? courses.courses.map((el) => {
                return (
                  <Link className="home__link" to={`/home/course${el.id}`} key={el.id}>
                    <CourseName el={el} onChangeCourse={onChangeCourse}/>
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
        
        <ul className="home__description home__description_type_files">
          
          {files
            ? files.map((el, index) => {
                return (
                  <a className="home__link mb-2" key={index} href={el.link}>
                    {el.type}
                  </a>
                );
              })
            : "Нет доступных справок"}
        </ul>
        <button className="home__back" type="button" onClick={goBack}>
          <BiArrowBack />
          Назад
        </button>
      </div>
    </section>
  );
}

export default StudentInfo;
