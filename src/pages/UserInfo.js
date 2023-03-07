import React from "react";
import personImg from "../images/person2.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { Link } from "react-router-dom";
import Student from "../components/Student.js";
import Class from "../components/Class.js";

function UserInfo({
  students,
  onOpenAddStudents,
  onOpenDelete,
  onChangeStudent,
}) {
  const userContext = React.useContext(CurrentUserContext);

  function handleAddClick() {
    onOpenAddStudents();
  }

  return (
    <section className="home">
      <div className="home__wrapper">
        <img className="home__user-image" src={personImg} alt="user"></img>
        <h1 className="home__user-name">{userContext.name}</h1>
      </div>

      <div className="home__wrapper home__container">
        <h2 className="home__title">Мои ученики:</h2>
        <button
          type="button"
          className="home__add-student"
          onClick={handleAddClick}
        >
          + Добавить ученика
        </button>
        <ul className="home__students">
          {Array.isArray(students)
            ? students.map((el) => {
                return (
                  <Link
                    className="home__link"
                    key={el.id}
                    to={`/home/student${el.id}`}
                  >
                    <Student
                      el={el}
                      onOpenDelete={onOpenDelete}
                      onChangeStudent={onChangeStudent}
                    />
                  </Link>
                );
              })
            : "Список учеников пуст"}
        </ul>
      </div>
      <div className="home__wrapper home__container">
        <h2 className="home__title">Мои классы:</h2>
        <ul className="home__students home__students_type_class">
          Вы приобрели
          <Class num="6" />
          <Class num="7" />
          <Class num="8" />
        </ul>
      </div>
    </section>
  );
}

export default UserInfo;
