import React from "react";
import personImg from "../images/person2.png";

function Home(props) {
  return (
    <>
      <nav className="side-bar">

      </nav>
      <section className="home">
        <div className="home__wrapper">
          <img
            className="home__user-image"
            src={personImg}
            alt="user-image"
          ></img>
          <h1 className="home__user-name">User Name</h1>
        </div>
        <div className="home__wrapper home__container">
          <h2 className="home__title">Выберете ученика:</h2>
        </div>
        <div className="home__wrapper home__container">
          <button type="button" className="home__add-student">+ Добавить ученика</button>
        </div>
        
      </section>
    </>
  );
}

export default Home;
