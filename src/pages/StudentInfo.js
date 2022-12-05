import React from "react";
import personImg from "../images/person2.png";

function StudentInfo({ currentStudent }) {

    console.log(currentStudent);
  return (
    
      <section className="home">
      <div className="home__wrapper">
        <img className="home__user-image" src={personImg} alt="user"></img>
        <h1 className="home__user-name">{currentStudent.firstname + " " + currentStudent.lastname + " " + currentStudent.middlename}</h1>
      </div>
      <div className="home__wrapper home__container">
        <h2 className="home__title">Информация о ученике</h2>
        <p className="popup__description">E-mail: {currentStudent.username}</p>
        <p className="popup__description">Школа: {currentStudent.department}</p>
        <p className="popup__description">Оценки: </p>
        
      </div>
      
    </section>
    
  );
}

export default StudentInfo;
