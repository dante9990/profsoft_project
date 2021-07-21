import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { Counter, Bar, Table, Tree } from "../Components";
import classes from "./app.module.scss";
import { TablePage } from "../Pages/Table";
import { Login } from "../Pages/Login";
export const Router = () => {
  return (
    <Switch>
      <Route path={"/tree"} component={Tree} exact={true} />
      <Route path={"/table"} component={TablePage} exact={true} />
      <Route path={"/login"} component={Login} exact={true} />
      <Route path={"/"} exact={true} component={Bar} />
    </Switch>
  );
};
