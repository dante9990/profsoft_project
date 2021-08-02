import React from "react";
import classes from "./directions.module.scss";

export const Directions = () => {
  return (
    <>
      <div className={classes.direction}>
        <div className={classes.direction__info}>
          <h2 className={classes.direction__title}>все Направления обучения</h2>
          <p className={classes.direction__subtitle}>
            Компания ProfSoft находится на рынке мобильных приложений более 5-ти
            лет. Мы не только разрабатываем качественные программные продукты,
            но и подготавливаем квалифицированных IT-специалистов
          </p>
        </div>
        <div className={classes.images}>
          <div className={classes.image}></div>
          <div className={classes.image}></div>
          <div className={classes.image}></div>
          <div className={classes.image}></div>
          <div className={classes.image}></div>
          <div className={classes.image}></div>
          <div className={classes.image}></div>
          <div className={classes.image}></div>
        </div>
      </div>
    </>
  );
};
