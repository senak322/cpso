import React from "react";
import personImg from "../images/person2.png";
import Settings from "./Settings.js";
import { Route, Switch, NavLink, Redirect, useHistory } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute.js";
import { FaBars } from "react-icons/fa";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import {CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Home(props) {

  const userContext = React.useContext(CurrentUserContext)

  return (
    <>
      <nav className="side-bar">
        <div className="side-bar__container">
          <FaBars className="side-bar__icon" />
        </div>
        <ul className="side-bar__nav">
          <li className="side-bar__container">
            <NavLink
              to="/home"
              key="home"
              className="link"
              activeClassName="link__active"
            >
              <AiFillHome className="side-bar__icon" />
            </NavLink>
          </li>
          <li className="side-bar__container">
            <NavLink
              to="/settings"
              key="settings"
              className="link"
              activeClassName="link__active"
            >
              <AiFillSetting className="side-bar__icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <ProtectedRoute
          path="/settings"
          component={Settings}
          loggedIn={props.loggedIn}
        />
      </Switch>
      <section className="home">
        <div className="home__wrapper">
          <img
            className="home__user-image"
            src={personImg}
            alt="user"
          ></img>
          <h1 className="home__user-name">{userContext.name}</h1>
        </div>
        <div className="home__wrapper home__container">
          <h2 className="home__title">Выберете ученика:</h2>
        </div>
        <div className="home__wrapper home__container">
          <button type="button" className="home__add-student">
            + Добавить ученика
          </button>
          <ul className="home__students">
            {props.students.map((el) => {
              return (
              <li className="home__student" key={el.userid}>
                {el.Student_Name}
              </li>)
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
