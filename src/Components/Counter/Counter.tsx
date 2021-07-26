import React, { useState } from "react";
import classes from "./counter.module.scss";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Главная страница
          </Link>
          <Typography color="textPrimary">Счетчик</Typography>
        </Breadcrumbs>
        <Paper elevation={3}>
          <div className={classes.container}>
            <div className={classes.container__counter}>{counter}</div>
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Перейти на структуры
            </Button>
          </div>
        </Paper>
      </Container>
    </>
  );
};
