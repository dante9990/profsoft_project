import React, { useEffect } from "react";
import { Router } from "./router";
import "./app.css";
import { useDispatch } from "react-redux";
import { loginFunc } from "./redux/actions-create/authAction";
import { ActionState, AuthType } from "./types/auth";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const jsonUserData = localStorage.getItem("userData");
    if (jsonUserData) {
      const userData: ActionState = JSON.parse(jsonUserData);
      loginFunc(userData);
      dispatch({ type: AuthType.LOGIN, payload: userData });
    }
  }, []);
  return <Router />;
}
