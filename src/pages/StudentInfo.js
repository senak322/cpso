import React from "react";
import personImg from "../images/person2.png";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function StudentInfo({ currentStudent }) {
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
        <p className="home__description">Оценки: </p>
        <button className="home__back" type="button" onClick={goBack}>
          <BiArrowBack/>Назад
        </button>
      </div>
    </section>
  );
}

export default StudentInfo;
