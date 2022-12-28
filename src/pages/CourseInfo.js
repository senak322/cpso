import personImg from "../images/person2.png";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function CourseInfo({ currentStudent, grades }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

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
        <h2 className="home__title">Предметы и оценки</h2>
      </div>
      <div className="home__wrapper home__container">
        <ul className="home__description">
          {grades.grades ? (
            grades.grades.map((el) => {
              return (
                <li key={el.id}>
                  <h3>{el.item}</h3>
                  <p>{el.module}</p>
                  <ul>
                    
                    {el.modules.map((el) => {
                      return (
                        <li key={el.id}>
                          <h4 className="home__lesson mb-3">{el.item_name}</h4>
                          <p>Оценка по пятибалльной системе: {el.grade}</p>
                          <p>Оценка в баллах: {el.points}</p>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
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
