import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, TextField } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import styles from "./loginComponnent.module.scss";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { useHistory } from "react-router-dom";

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
          <div className={styles.container}>
            <TextField
              label="Логин"
              variant="filled"
              className={classes.input}
              type={"email"}
            />
            <TextField
              label="Пароль"
              variant="filled"
              className={classes.input}
              type={"password"}
            />
            <Button variant="contained" color="secondary">
              Войти
            </Button>
          </div>
        </Paper>
      </Container>
    </>
  );
};
