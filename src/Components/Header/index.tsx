import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as LightLogo } from "../../assets/lightLogo.svg";
import { ReactComponent as Union } from "../../assets/arrows crosses and other/Union.svg";
import { ReactComponent as MenuIcon } from "../../assets/arrows crosses and other/menu.svg";
import { Props } from "../MobileMenu";
import { RootState } from "../../redux/type";
import { ActionState } from "../../types/auth";
import { logout } from "../../redux/actions-create/authAction";
import { useDispatch, useSelector } from "react-redux";

export const Header = (props: Props) => {
  const stateUser = useSelector<RootState, ActionState>((state) => state.auth);

  const dispatch = useDispatch();

  const setLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <header className={classes.header}>
        <NavLink to={"/"} exact={true}>
          <Logo className={props.active ? classes.hide : classes.logo} />
        </NavLink>
        <NavLink to={"/"} exact={true}>
          <LightLogo className={props.active ? classes.logo : classes.hide} />
        </NavLink>
        <div className={props.active ? classes.hide : ""}>
          <a
            href={"https://profsoft.pro/"}
            className={classes.header__linkProfsoft}
            target="_blank"
          >
            Компания
          </a>
          <a
            href={"https://academy.profsoft.pro/"}
            className={classes.header__linkProfsoft}
            target="_blank"
          >
            Академия
          </a>
          <NavLink
            to={"/courses"}
            exact={true}
            className={`${classes.header__link} `}
            activeClassName={classes.header__link__active}
          >
            Курсы
          </NavLink>
          <NavLink
            to={stateUser.login ? "/" : "/login"}
            className={classes.header__link__entry}
            activeClassName={classes.header__link__active}
            onClick={setLogout}
          >
            {stateUser.login ? "Выйти" : "Войти"}
          </NavLink>
        </div>
        <MenuIcon
          className={classes.menu}
          onClick={() => props.setActive(!props.active)}
        />
        <Union className={classes.cross} />
      </header>
    </>
  );
};
