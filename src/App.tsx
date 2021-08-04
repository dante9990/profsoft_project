import React, {useEffect} from "react";
import { Router } from "./router";
import "./app.module.scss";
import {loginAction} from './redux/actions/authAction'
import {AuthState} from "./redux/type";
import {useDispatch} from "react-redux";

export function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const jsonUserData = localStorage.getItem('userData')
    if(jsonUserData) {
      const userData:AuthState = JSON.parse(jsonUserData)
      dispatch(loginAction(userData))
    }
  })
  return <Router />;
}
