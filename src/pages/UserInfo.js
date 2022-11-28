import React from "react";
import personImg from "../images/person2.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function UserInfo({students, onOpen}) {
  const userContext = React.useContext(CurrentUserContext);

  function handleClick() {
    onOpen()
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
        <button type="button" className="home__add-student" onClick={handleClick}>
          + Добавить ученика
        </button>
        <ul className="home__students">
          {students.isArray
            ? students.map((el) => {
                return (
                  <li className="home__student" key={el.userid}>
                    {el.Student_Name}
                  </li>
                );
              })
            : students}
        </ul>
      </div>
    </section>
  );
}

export default UserInfo;
