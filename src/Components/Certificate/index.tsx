import React from "react";
import classes from "./certificate.module.scss";
import { ReactComponent as Men } from "../../assets/yellowMen.svg";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Signature } from "../../assets/signature.svg";

export const Certificate = (
  fullName: any,
  dateStart: string,
  dateFinish: string,
  number: number,
  direction: string,
  features: any
) => {
  return (
    <>
      <div className={classes.openBlock}>
        <div className={classes.openBlock__info}>
          <div className={classes.openBlock__info__certificateTitle}>
            <p className={classes.greyLightText}>Сертификат</p>
            <p className={classes.blackText}>№ {number}</p>
            <div className={classes.openBlock__info__certificateTitle__name}>
              <p className={classes.blackText}>{fullName}</p>
            </div>
          </div>
          <div className={classes.openBlock__info__certificateInfo}>
            <p className={classes.greyLightText}>Направление подготовки: </p>
            <p className={classes.blackText}>{direction}</p>
          </div>
          <div className={classes.openBlock__info__certificatePeriod}>
            <p className={classes.greyLightText}>Период обучения: </p>
            <p className={classes.blackText}>
              {dateStart}-{dateFinish}
            </p>
          </div>
          <div className={classes.openBlock__info__certificateLearn}>
            <p className={classes.greyLightText}>Изучено: </p>
            {/*<p className={classes.blackText}>{features[0].name}; </p>*/}
            {/*<p className={classes.blackText}>{features[1].name}; </p>*/}
          </div>
        </div>
        <div className={classes.openBlock__card}>
          <div className={classes.openBlock__card__blackSquare}>
            <Men className={classes.openBlock__card__blackSquare__men} />
            <div className={classes.openBlock__card__blackSquare__blockInfo}>
              <Logo
                className={
                  classes.openBlock__card__blackSquare__blockInfo__logo
                }
              />
              <p
                className={
                  classes.openBlock__card__blackSquare__blockInfo__certificate
                }
              >
                Сертификат <br /> о прохождении обучения
              </p>
              <p
                className={
                  classes.openBlock__card__blackSquare__blockInfo__name
                }
              >
                {fullName}
              </p>
              <hr
                style={{
                  margin: "2px 0",
                  border: "0.361751px solid #FFFFFF",
                }}
              />
              <p
                className={
                  classes.openBlock__card__blackSquare__blockInfo__period
                }
              >
                Направление подготовки {direction} <br />
                период обучения {dateStart}-{dateFinish}
              </p>
              <button
                className={
                  classes.openBlock__card__blackSquare__blockInfo__button
                }
              >
                Figma
              </button>
              <button
                className={
                  classes.openBlock__card__blackSquare__blockInfo__button
                }
              >
                UXPIN
              </button>
              <p
                className={
                  classes.openBlock__card__blackSquare__blockInfo__director
                }
              >
                Директор ООО ProfSoft <br /> Каплин К.О.
              </p>
              <Signature
                className={
                  classes.openBlock__card__blackSquare__blockInfo__signature
                }
              />
            </div>
          </div>
        </div>
      </div>
      <p className={classes.link}>поделиться</p>
    </>
  );
};
