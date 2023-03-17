import React from "react";
import BackButton from "../components/BackButton";
import { useParams, Link } from "react-router-dom";

function ClassStatus() {

  let { id ,classid } = useParams();

  return (
    <section className="home">
      <div className="home__wrapper home__container">
        <ul className="home__status-list">
          <li className="home__status">
            <h6>Шаг 1. Прикрепление ученика к классу</h6>
            <Link to={`/home/student${id}/class${classid}/addstudent`} ><button type="button" className="btn btn-primary" >{classid} Класс</button></Link>
            <p>Войдите в класс и прикрепите ученика</p>
          </li>
          <span></span>
          <li className="home__status">
            <h6>Шаг 2. Зачисление ученика в школу</h6>
            <Link to={`/home/student${id}/class${classid}/addstudentdocs`}><button type="button" className="btn btn-primary">{classid} Класс</button></Link>
            <p>Войдите в класс и подайте заявление</p>
          </li>
          <li className="home__status">
            <h6>Шаг 3. Справка о зачислении сформирована</h6>
            <button type="button" className="btn btn-primary">{classid} Класс</button>
            <p>Войдите в класс, чтобы просмотреть или скачать справку</p>
          </li>
          <li className="home__status">
            <h6>Шаг 4. Ознакомиться со статусом по Аттестации</h6>
            <button type="button" className="btn btn-primary">{classid} Класс</button>
            <p>
              Аттестацию можно пройти на платформе. Для сдачи пройдите ВХОД НА
              ПЛАТФОРМУ с логином ученика
            </p>
          </li>
          <li className="home__status">
            <h6>Шаг 5. Аттестация завершена</h6>
            <button type="button" className="btn btn-primary">{classid} Класс</button>
            <p>Мы начали формировать справку с оценками</p>
          </li>
          <li className="home__status">
            <h6>Шаг 6. Справка сформирована</h6>
          </li>
        </ul>
        
        <button type="button" className="btn btn-danger mb-3 mx-3">Купить следующий класс</button>
        <button type="button" className="btn btn-secondary mb-3 mx-3">Открепиться из школы</button>
        <BackButton />
      </div>
    </section>
  );
}

export default ClassStatus;
