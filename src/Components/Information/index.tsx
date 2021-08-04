import React from "react";
import classes from "./information.module.scss";
import { Button } from "../Button";
import { School } from "../School";

export const Information = () => {
  return (
    <>
      {/*<div className={classes.plus}></div>*/}
      <div className={classes.container}>
        <div className={classes.info}>
          <h1 className={classes.info__title}>
            Твой билет <br /> в команду мечты
          </h1>
          <p className={classes.info__text}>
            Пройди обучение и получи сертификат <br /> подтверждающий
            квалификацию
          </p>
        </div>
        <Button />
        <div className={classes.line}></div>
        <div className={classes.why}>
          <h2 className={classes.why__title}>Зачем?</h2>
          <p className={classes.why__text}>
            Компания ProfSoft находится на рынке мобильных приложений более 5-ти
            лет. Мы не только разрабатываем качественные программные продукты,
            но и подготавливаем квалифицированных IT-специалистов
          </p>
        </div>
        {/*<School />*/}
        <div className={classes.school}>
          <div className={classes.school__item}>
            <h3 className={classes.school__num}>3</h3>
            <span className={classes.school__text}>
              Школы <br /> разработки
            </span>
          </div>
          <div className={classes.school__item}>
            <h3 className={classes.school__num}>8</h3>
            <span className={classes.school__text}>
              Направлений <br />
              обучения
            </span>
          </div>
          <div className={classes.school__item}>
            <h3 className={classes.school__num}>435</h3>
            <span className={classes.school__text}>Записей</span>
          </div>
          <div className={classes.school__item}>
            <h3 className={classes.school__num}>75</h3>
            <span className={classes.school__text}>Учеников</span>
          </div>
        </div>
      </div>
    </>
  );
};
