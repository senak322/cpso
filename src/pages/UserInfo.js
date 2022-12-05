import React from "react";
import personImg from "../images/person2.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function UserInfo({students, onOpenAddStudents, onOpenDelete}) {
  const userContext = React.useContext(CurrentUserContext);

  function handleAddClick() {
    onOpenAddStudents()
  }

  function hadleDeleteClick(e) {
    onOpenDelete(e.target.id);
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
        <button type="button" className="home__add-student" onClick={handleAddClick}>
          + Добавить ученика
        </button>
        <ul className="home__students">
        {Array.isArray(students)
            ? students.map((el) => {
                return (
                  <Link className="home__link" key={el.id} to={`/home/student${el.id}`}><li className="home__student" key={el.id}>
                    <p className="home__student-name">{el.lastname + " " + el.firstname + " " + el.middlename}</p>
                    <AiOutlineDelete onClick={hadleDeleteClick} id={el.id} className="home__add-student home__add-student_type_delete" />
                  </li>
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
