import { useEffect } from "react";
import personImg from "../images/person2.png";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

function CourseInfo({ currentStudent, getGrades, grades }) {
  const navigate = useNavigate();

  let { id } = useParams();

  const goBack = () => {
    navigate(-1);
  };

  // useEffect(() => {
  //   getGrades(currentStudent.id, id);
  // }, []);

  console.log(grades);

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
        <ul className="home__description">
          Предметы:
          {grades.grades ? (
            grades.grades.map((el) => {
              return <li>el</li>;
            })
          ) : (
            <p>Оценок ещё нет</p>
          )}
        </ul>
        <button className="home__back" type="button" onClick={goBack}>
          <BiArrowBack />
          Назад
        </button>
      </div>
    </section>
  );
}

export default CourseInfo;
