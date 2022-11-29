import React from "react";
import personImg from "../images/person2.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Settings() {
  const userContext = React.useContext(CurrentUserContext);

  function handleClick() {

  }

  return (
    <section className="home">
      <div className="home__wrapper">
        <img className="home__user-image" src={personImg} alt="user"></img>
        <h1 className="home__user-name">{userContext.name}</h1>
      </div>
      <div className="home__wrapper home__container">
        <h2 className="home__title">Изменить профиль:</h2>
      </div>
      <div className="home__wrapper home__container">
        <button
          type="button"
          className="home__add-student"
          onClick={handleClick}
        >
          Изменить пароль
        </button>
        <button
          type="button"
          className="home__add-student"
          onClick={handleClick}
        >
          Изменить ФИО
        </button>
        <button
          type="button"
          className="home__add-student"
          onClick={handleClick}
        >
          Изменить фото профиля
        </button>
      </div>
    </section>
  );
}

export default Settings;
