import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, loggedIn}) => {
  return loggedIn ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
