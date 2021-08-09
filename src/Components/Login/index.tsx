import React from "react";
import classes from "./login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, RootState } from "../../redux/type";
import { loginAction } from "../../redux/actions/authAction";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const state = useSelector<RootState, AuthState>((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const setLogin = (email: string, password: string) => {
    const data = {
      login: email,
      name: "Солдатов Алексей Алексеевич",
      token: password,
    };
    dispatch(loginAction(data));
    localStorage.setItem("userData", JSON.stringify(data));
  };
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Не является email")
        .min(5, "минимум 5 символов")
        .max(20, "Максимум 20 символов")
        .required("Введите email"),
      password: Yup.string()
        .min(8, "минимум 8 символов")
        .max(20, "Максимум 20 символов")
        .required("Введите пароль"),
    }),
    onSubmit: () => {
      setLogin(values.email, values.password);
      history.push("/personal");
    },
  });

  return (
    <>
      <div className={classes.login}>
        <h1 className={classes.login__title}>Личный кабинет</h1>
        <form className={classes.login__form} onSubmit={handleSubmit}>
          <input
            className={classes.input}
            placeholder="email"
            type={"text"}
            value={values.email}
            name={"email"}
            onChange={handleChange}
          />
          <input
            className={classes.input}
            placeholder="пароль"
            type={"password"}
            value={values.password}
            name={"password"}
            onChange={handleChange}
          />
          <button type={"submit"} className={classes.arrow} />
        </form>
        {state.name ? (
          <p>Вас зовут: {state.name}</p>
        ) : (
          <p>вы не авторизованы</p>
        )}
        <p className={classes.login__text}>
          Что-то не получается? <br />
          Напишите в поддержку{" "}
          <a className={classes.login__link} href="academy@profsoft.pro">
            academy@profsoft.pro
          </a>
        </p>
      </div>
    </>
  );
};
