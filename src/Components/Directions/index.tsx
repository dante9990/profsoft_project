import classes from "./directions.module.scss";
import React from "react";
import { Text } from "../Text";
import { ReactComponent as WhiteArrow } from "../../assets/whiteArrow.svg";
import { ReactComponent as Union } from "../../assets/Union.svg";

export const Directions = () => {
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
        <WhiteArrow className={classes.whiteArrow} />
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
