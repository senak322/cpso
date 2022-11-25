import React from "react";
import Settings from "./Settings.js";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute.js";
import { FaBars } from "react-icons/fa";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import UserInfo from "./UserInfo.js";

function Home(props) {
  

  return (
    <>
      <nav className="side-bar">
        <div className="side-bar__container">
          <FaBars className="side-bar__icon" />
        </div>
        <ul className="side-bar__nav">
          <li className="side-bar__container">
            <NavLink
              to="/home/user-info"
              key="home"
              className="link"
              activeClassName="side-bar__active"
            >
              <AiFillHome className="side-bar__icon" />
            </NavLink>
          </li>
          <li className="side-bar__container">
            <NavLink
              to="/home/settings"
              key="settings"
              className="link"
              activeClassName="side-bar__active"
            >
              <AiFillSetting className="side-bar__icon" />
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <ProtectedRoute
          path="/home/user-info"
          component={UserInfo}
          loggedIn={props.loggedIn}
          students={props.students}
        />
        <ProtectedRoute
          path="/home/settings"
          component={Settings}
          loggedIn={props.loggedIn}
        />
        <Route path="/home">
          {props.loggedIn ? (
            <Redirect to="/home/user-info" />
          ) : (
            <Redirect to="/signin" />
          )}
        </Route>
      </Switch>
    </>
  );
}

export default Home;
