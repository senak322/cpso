import React from "react";
import Settings from "./Settings.js";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute.js";
import UserInfo from "./UserInfo.js";
import SideBar from "../components/SideBar.js";

function Home({loggedIn, students, onOpenAddStudents, onOpenDelete}) {
  return (
    <>
      <SideBar />
      <Switch>
        <ProtectedRoute
          path="/home/user-info"
          component={UserInfo}
          loggedIn={loggedIn}
          students={students}
          onOpenAddStudents={onOpenAddStudents}
          onOpenDelete={onOpenDelete}
        />
        <ProtectedRoute
          path="/home/settings"
          component={Settings}
          loggedIn={loggedIn}
        />
        <Route path="/home">
          {loggedIn ? (
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
