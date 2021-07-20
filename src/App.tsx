import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { Counter, Table, Tree } from "./Components";
import classes from "./app.module.scss";
export function App() {
  return (
    <Switch>
      <Route path={"/counter"} component={Counter} exact={true} />
      <Route path={"/"} exact={true}>
        {/*<Tree />*/}
        <Table />
        {/*<NavLink to={"/counter"} className={classes.link}>*/}
        {/*  Перейти к счетчику*/}
        {/*</NavLink>*/}
      </Route>
    </Switch>
  );
}
