import React from "react";
import classes from "./certificate.module.scss";
import { Input } from "../Input";

export const Certificate = () => {
  return (
    <>
      <div className={classes.certificate}>
        <h2 className={classes.certificate__title}>ПРОВЕРИТЬ СЕРТИФИКАТ</h2>
        <p className={classes.certificate__text}>
          Введите номер сертификата для проверки подлинности
        </p>
        <Input />
      </div>
    </>
  );
};
