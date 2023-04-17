import React from "react";
import personImg from "../images/person2.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Settings({ onOpenEditName, onOpenEditPassword }) {
  const userContext = React.useContext(CurrentUserContext);

  function handleEditName() {
    onOpenEditName();
  }

  function handleEditPassword() {
    onOpenEditPassword();
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
          style={{ margin: 0 }}
          onClick={handleEditName}
        >
          Изменить ФИО/E-mail
        </button>
        <button
          type="button"
          className="home__add-student"
          style={{ marginTop: "1rem" }}
          onClick={handleEditPassword}
        >
          Изменить пароль
        </button>
      </div>
    </section>
  );
}

export default Settings;
