import React from "react";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";

function AddStudentToClass() {
    let { id } = useParams();

  return (
    <section className="home">
      <div className="home__wrapper home__container">
        <h1>{id} класс</h1>
        <p>Выберите ученика которого хотите прикрепить к классу</p>
        <BackButton />
      </div>
      
    </section>
  );
}

export default AddStudentToClass;
