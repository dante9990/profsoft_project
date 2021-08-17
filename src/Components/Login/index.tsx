import React, { useState } from "react";
import { Text } from "../Text";
import classes from "./login.module.scss";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";
import { RootState } from "../../redux/type";
import { ActionState } from "../../types/auth";
import { loginFunc } from "../../redux/actions-create/authAction";
import { useDispatch, useSelector } from "react-redux";
import { users } from "../../redux/data";

export const LoginCom = () => {
  const state = useSelector<RootState, ActionState>((state) => state.auth);
  const dispatch = useDispatch();

  const setLogin = async (login: string, password: string) => {
    const fitUsers = users.filter(
      (user) => login === user.login && password === user.token
    );

    if (fitUsers.length !== 0) {
      dispatch(
        await loginFunc({
          id: fitUsers[0].id,
          login: login,
          name: fitUsers[0].name,
          token: password,
        })
      );
    } else {
      window.alert("Неверный логин или пароль");
    }
  };

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLogin(values.email, values.password);
    },
  });
  return state.login ? (
    <Redirect to={"/personal"} />
  ) : (
    <div className={classes.loginBlockContainer}>
      <div className={classes.login_header}>
        <Text theme={"dark"} type={"mainHeaderLogin"} text={"Личный кабинет"} />
      </div>
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
            placeholder={"PASSWORD"}
          />
          <button
            type={"submit"}
            className={classes.white_arr}
            disabled={state.in_progress}
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
