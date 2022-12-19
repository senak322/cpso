import React from "react";

function CourseName({ el, onChangeCourse }) {
  function handleChangeCourse() {
    onChangeCourse(el);
  }

  return (
    <li
      className="home__student home__student_type_class"
      onClick={handleChangeCourse}
      key={el.id}
    >
      {el.name}
    </li>
  );
}

export default CourseName;
