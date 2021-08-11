import React, { useState } from "react";
import { Text } from "../Text";
import classes from "./login.module.scss";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { AuthState, RootState } from "../../redux/type";
import { loginAction, logoutAction } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { users } from "../../redux/data";

export const Login = () => {
  //console.log(state);
  const state = useSelector<RootState, AuthState>(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const setLogin = (login: string, password: string) => {
    const fitUsers = users.filter(
      (user) => login === user.login && password === user.token
    );

    if (fitUsers.length !== 0) {
      const dataToSend = {
        id: fitUsers[0].id,
        login: fitUsers[0].login,
        name: fitUsers[0].name,
        token: fitUsers[0].token,
      };
      dispatch(
        loginAction({
          id: fitUsers[0].id,
          login: login,
          name: fitUsers[0].name,
          token: password,
        })
      );
      localStorage.setItem("userData", JSON.stringify(dataToSend));
    } else {
      window.alert("Вы ввели неверный логин или пароль");
    }
  };

  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return state.login ? (
    <Redirect to={"/personal"} />
  ) : (
    <div className={classes.loginBlockContainer}>
      <div className={classes.block_for_form}>
        <form onSubmit={handleSubmit} className={classes.form_container}>
          <input
            className={classes.input}
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            placeholder={"EMAIL"}
          />

          <input
            className={classes.input}
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
            placeholder={"ПАРОЛЬ"}
          />
          <button
            type={"submit"}
            className={classes.white_arr}
            onClick={() => setLogin(values.email, values.password)}
          />
        </form>
      </div>
      <div className={classes.supportParContainer}>
        <p className={classes.supportPar}>Что-то не получается?</p>
        <div className={classes.innerSupportParCont}>
          <p className={classes.supportPar}>Напиши в поддержку</p>
          <p className={`${classes.supportPar} ${classes.whiteLink}`}>
            academy@profsoft.pro
          </p>
        </div>
      </div>
    </div>
  );
};
