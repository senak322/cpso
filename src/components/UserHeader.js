import personImg from "../images/person2.png";
import React from "react";

function UserHeader() {
  const studentEl = JSON.parse(localStorage.getItem("currentStudent"));

  return (
    <div className="home__wrapper">
      <img className="home__user-image" src={personImg} alt="user"></img>
      <h1 className="home__user-name">
        {studentEl.lastname +
          " " +
          studentEl.firstname +
          " " +
          studentEl.middlename}
      </h1>
    </div>
  );
}

export default UserHeader;