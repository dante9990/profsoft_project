import React from "react";
import { Route, Switch } from "react-router-dom";
import { Landing } from "../Pages/Landing";
import { Login } from "../Pages/Login";
import { Cabinet } from "../Pages/Cabinet";
import { RootState } from "../redux/type";
import { ActionState } from "../types/auth";
import { useSelector } from "react-redux";
import { CoursesPage } from "../Pages/CoursesPage";

const ErrorComponent = () => {
  return <div>not found</div>;
};

export const Router = () => {
  const state = useSelector<RootState, ActionState>((state) => state.auth);

  return (
    <Switch>
      <Route path={"/"} component={Landing} exact={true} />
      {state.token ? (
        <Route path={"/personal"} component={Cabinet} exact={true} />
      ) : null}
      <Route path={"/login"} component={Login} exact={true} />
      <Route path={"/courses"} component={CoursesPage} exact={true} />
      <Route component={ErrorComponent} />
    </Switch>
  );
};
