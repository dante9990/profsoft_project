import React, { useContext } from "react";
import classes from "../../Certificate/certificate.module.scss";
import styles from "./myCoursesBlock.module.scss";
import { CertificateForm } from "../../CertificateForm";
import { CertificateContext, Certificate } from "../../../Context/certificate";
import { ReactComponent as CertBack } from "../../../assets/certificate elements/certBack.svg";
import { ReactComponent as Chel } from "../../../assets/certificate elements/chel.svg";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as Sign } from "../../../assets/certificate elements/sign.svg";
import { InputProps } from "../../../Pages/Cabinet";

export const MyCoursesBlock = (inputProps: InputProps) => {
  return (
    <>
      <div className={classes.myCoursesContainer}>
        <div className={classes.studentContainer}>
          <CertificateForm
            id={inputProps.data.id}
            number={inputProps.data.number}
            fullName={inputProps.data.fullName}
            direction={inputProps.data.direction}
            dateStart={inputProps.data.dateStart}
            dateFinish={inputProps.data.dateFinish}
            features={inputProps.data.features}
            isShow={inputProps.data.isShow}
            in_progress={inputProps.data.in_progress}
          />
        </div>
        <div className={classes.pictureCont}>
          <CertBack className={classes.certBack} />
          <Chel className={classes.chel} />
          <div className={classes.certContainer}>
            <Logo className={classes.logo} />
            <div className={classes.certInfo}>
              <p className={`${classes.mainText} ${classes.mainText__white}`}>
                Сертификат
                <br />о прохождении обучения
              </p>
              <div className={classes.userBox}>
                <p className={`${classes.mainText__white} ${classes.userText}`}>
                  {inputProps.data.fullName[0]} {inputProps.data.fullName[1]}{" "}
                  {inputProps.data.fullName[2]}
                </p>
              </div>
            </div>
            <div className={classes.yellowBlock}>
              <p
                className={`${classes.mainText} ${classes.mainText__yellow} ${classes.yellowText}`}
              >
                Направление подготовки {inputProps.data.direction}
              </p>
              <p className={`${classes.mainText} ${classes.mainText__yellow}`}>
                период обучения {inputProps.data.dateStart}-
                {inputProps.data.dateFinish}
              </p>
              <div className={classes.yellowButtonsBlock}>
                {inputProps.data.features.map((feature: any) => (
                  <button
                    key={feature.id}
                    className={`${classes.yellowFeatures} ${classes.mainText} ${classes.mainText__yellow}`}
                  >
                    {feature.name}
                  </button>
                ))}
              </div>
            </div>
            <div className={classes.companyInfo}>
              <div className={classes.signBlock}>
                <div className={classes.directorInfo}>
                  <p
                    className={`${classes.mainText} ${classes.mainText__grey} ${classes.yellowText}`}
                  >
                    Директор ООО ProfSoft
                  </p>
                  <p
                    className={`${classes.mainText} ${classes.mainText__grey}`}
                  >
                    Каплин К.О.
                  </p>
                </div>
                <div className={classes.signWithBlock}>
                  <Sign className={classes.sign} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
