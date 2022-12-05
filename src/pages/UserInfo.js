import React from "react";
import personImg from "../images/person2.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { Link } from "react-router-dom";
import Student from "../components/Student.js";

function UserInfo({ students, onOpenAddStudents, onOpenDelete, onChangeStudent }) {
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
        <h2 className="home__title">Выберете ученика:</h2>
      </div>
      <div className="home__wrapper home__container">
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
                    <Student el={el} onOpenDelete={onOpenDelete} onChangeStudent={onChangeStudent}/>
                  </Link>
                );
              })
            : "Список учеников пуст"}
        </ul>
      </div>
    </section>
  );
}

export default UserInfo;
