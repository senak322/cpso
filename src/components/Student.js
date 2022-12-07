import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function Student({ el, onOpenDelete, onChangeStudent }) {
  function hadleDeleteClick(e) {
    onOpenDelete(e.target.id);
  }

  function changeStudent() {
    onChangeStudent(el);
  }

  return (
    <li className="home__student" onClick={changeStudent} key={el.id}>
      <p className="home__student-name">
        {el.lastname + " " + el.firstname + " " + el.middlename}
      </p>
      <AiOutlineDelete
        onClick={hadleDeleteClick}
        id={el.id}
        className="home__add-student home__add-student_type_delete"
      />
    </li>
  );
}

export default Student;
