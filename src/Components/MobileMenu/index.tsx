import React from "react";
import { Container } from "../Container";
import { Header } from "../Header";
import classes from "./mobileMenu.module.scss";
import { ReactComponent as MenuCross } from "../../assets/arrows crosses and other/menuCross.svg";
import { Text } from "../Text";
import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/type";
import { ActionState } from "../../types/auth";
import { logout } from "../../redux/actions-create/authAction";
import { useDispatch, useSelector } from "react-redux";

export interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = (props: Props) => {
  const stateUser = useSelector<RootState, ActionState>((state) => state.auth);

  const dispatch = useDispatch();

  const setLogout = () => {
    dispatch(logout());
  };

  const raise = () => {
    console.log("делаем raise" + `${stateUser.name}`);
  };

  return (
    <div className={props.active ? classes.menu__active : classes.menu}>
      <Container>
        <div className={classes.menu_header}>
          <Header active={props.active} setActive={props.setActive} />
          <div className={classes.blockForCross}>
            <MenuCross
              className={classes.menuCross}
              onClick={() => props.setActive(false)}
            />
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.menu_h1}>
            <Text theme={"light"} type={"mainHeader"} text={"Menu"} />
          </div>
          <div className={classes.menu_items}>
            <p className={classes.menu_item}>
              <a href={"https://profsoft.pro/"} target="_blank">
                {" "}
                <Text theme={"light"} type={"numbersText"} text={"Компания"} />
              </a>
            </p>
            <p className={classes.menu_item}>
              <a href={"https://academy.profsoft.pro/"} target="_blank">
                <Text theme={"light"} type={"numbersText"} text={"Академия"} />
              </a>
            </p>
            <p className={classes.menu_item}>
              <NavLink to={"/courses"} exact={true}>
                <Text theme={"light"} type={"numbersText"} text={"Курсы"} />
              </NavLink>
            </p>
            <p>
              <NavLink
                to={stateUser.login ? "/" : "/login"}
                onClick={stateUser.login ? setLogout : raise}
              >
                <Text
                  theme={"light"}
                  type={"numbersText"}
                  text={stateUser.login ? "Выйти" : "Войти"}
                />
              </NavLink>
            </p>
          </div>
        </div>
        <div className={classes.menu_footer}>
          <a className={`${classes.footer_item}`} href="https://profsoft.pro/">
            profsoft.pro
          </a>

          <a
            className={classes.footer_item}
            href={"https://academy.profsoft.pro/"}
          >
            academy.profsoft.pro
          </a>
        </div>
      </Container>
    </div>
  );
};
