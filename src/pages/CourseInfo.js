import { useParams } from "react-router-dom";
import {useEffect} from "react";
import UserHeader from "../components/UserHeader";
import BackButton from "../components/BackButton";

function CourseInfo({  grades, files, onLoading }) {
  
  let { classid } = useParams();
  
  const courseEl = JSON.parse(localStorage.getItem("currentCourse"));

  function havefiles(type) {
    console.log(files);
    function haveNeededType(el) {
      return el.type_id === type;
    }

    if (files === undefined) {
      return null;
    } else {
      return files.some(haveNeededType);
    } 
  }

  useEffect(() => {
    onLoading(courseEl, classid)
  }, [])

  return (
    <section className="home">
      <UserHeader />
      <div className="home__wrapper home__container">
        <h2 className="home__title">Предметы и оценки</h2>
      </div>
      <div className="home__wrapper home__container">
        <BackButton />
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
        <div className="home__files-container">
          <ul className="home__description home__description_type_files">
            <h4 className="home__title_type_student">
              Справки о прикреплении к школе:
            </h4>
            { havefiles("attach")
              ? files.map((el, index) => {
                if (el.type_id === "attach")
                  return (
                    <li key={index}>
                      <a
                        className="home__link mb-2"

                        href={el.link}
                      >
                        {el.type}
                      </a>
                    </li>
                  );
              })
              : "Нет доступных справок"}
          </ul>
          <ul className="home__description home__description_type_files">
            <h4 className="home__title_type_student">Справки об аттестации:</h4>
            { havefiles("attestation")
              ? files.map((el, index) => {
                if (el.type_id === "attestation") {
                  return (
                    <li key={index}>
                      <a
                        className="home__link mb-2"
                        target="_blank"
                        href={el.link}
                        rel="noreferrer"
                      >
                        {el.type}
                      </a>
                    </li>
                  );
                } return null;
              })
              : "Нет доступных справок"}
          </ul>
        </div>

        <BackButton />
      </div>
    </section>
  );
}

export default CourseInfo;
