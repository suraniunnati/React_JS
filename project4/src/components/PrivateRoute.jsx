import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isLogin = localStorage.getItem("login");

  return isLogin ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
