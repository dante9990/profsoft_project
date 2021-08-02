import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
// import { Bar, Tree } from "../Components";
// import classes from "./app.module.scss";
// import { TablePage } from "../Pages/Table";
// import { Login } from "../Pages/Login";
// import { CounterPage } from "../Pages/Counter";
// import { TreePage } from "../Pages/Tree";
// import { CardPage } from "../Pages/Card";
// import { routes } from "../service/routes";
import { Landing } from "../Pages/Landing";

export const Router = () => {
  return (
    <Switch>
      {/*<Route path={"/tree"} component={TreePage} exact={true} />*/}
      {/*<Route path={"/table"} component={TablePage} exact={true} />*/}
      {/*<Route path={"/login"} component={Login} exact={true} />*/}
      {/*  {routes.map(route => {*/}
      {/*      return <Route path={`/${route.path}`} component={route.Component} exact={true} key={route.id}/>*/}
      {/*  })}*/}
      {/*<Route path={"/counter"} component={CounterPage} exact={true} />*/}
      {/*<Route path={"/card"} component={CardPage} exact={true} />*/}
      {/*<Route path={"/"} exact={true} component={Bar} />*/}
      <Route path={"/"} component={Landing} exact={true} />
      <Route path={"/courses"} component={Landing} exact={true} />
    </Switch>
  );
};
