import classes from "./directions.module.scss";
import React from "react";
import { Text } from "../Text";
import { ReactComponent as WhiteArrow } from "../../assets/arrows crosses and other/whiteArrow.svg";
import Paper from "@material-ui/core/Paper";
import { ReactComponent as Union } from "../../assets/arrows crosses and other/Union.svg";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Directions = () => {
  const history = useHistory();
  const handleClick = () => history.push("/courses");

  return (
    <div className={classes.directionsArea}>
      <div className={classes.header_elements}>
        <p className={classes.directions_header}>
          <Text
            theme={"dark"}
            color={"white"}
            type={"secondHeader"}
            text={"Все направления обучения"}
          />
        </p>

        <WhiteArrow className={classes.whiteArrow} onClick={handleClick} />

        <Union className={classes.cross} />
      </div>

      <div className={classes.textWhy}>
        <p>
          <Text
            theme={"dark"}
            color={"white"}
            type={"description"}
            text={
              "Компания ProfSoft находится на рынке мобильных приложений более 5-ти лет. Мы не только разрабатываем качественные программные продукты, но и подготавливаем квалифицированных IT-специалистов"
            }
          />
        </p>
      </div>

      <div className={classes.root}>
        <div className={classes.papers}></div>
        <div className={classes.papers}></div>
        <div className={classes.papers}></div>
        <div className={classes.papers}></div>
        <div className={classes.papers}></div>
        <div className={classes.papers}></div>
        <div className={classes.papers}></div>
        <div className={classes.papers}></div>
      </div>
    </div>
  );
};
