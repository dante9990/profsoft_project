import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, TextField } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";

import styles from "./loginComponnent.module.scss";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    input: {
      width: "420px",
      marginTop: "25px",
      marginBottom: "25px",
    },
  })
);

export const LoginComponent = () => {
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
      console.log(values);
    },
  });
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            color="inherit"
            onClick={() => {
              history.push("/");
            }}
          >
            Главная страница
          </Link>
          <Typography color="textPrimary">Логин</Typography>
        </Breadcrumbs>
        <Paper elevation={3}>
          <form className={styles.container} onSubmit={handleSubmit}>
            <TextField
              label="Логин"
              variant="filled"
              className={classes.input}
              type={"text"}
              value={values.email}
              name={"email"}
              onChange={handleChange}
              error={!!(errors.email && touched.email)}
              helperText={
                errors.email && touched.email
                  ? errors.email
                  : "Здесь будет выводится ошибка"
              }
            />
            <TextField
              label="Пароль"
              variant="filled"
              className={classes.input}
              type={"password"}
              value={values.password}
              name={"password"}
              onChange={handleChange}
              error={!!(errors.password && touched.password)}
              helperText={
                errors.password && touched.password ? errors.password : null
              }
            />
            <Button variant="contained" color="secondary" type={"submit"}>
              Войти
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};
