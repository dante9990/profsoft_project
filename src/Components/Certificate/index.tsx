import classes from "./certificate.module.scss";
import React, { useContext } from "react";
import { ReactComponent as CertBack } from "../../assets/certBack.svg";
import { ReactComponent as Chel } from "../../assets/chel.svg";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Sign } from "../../assets/sign.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootStateCertificate } from "../../redux/type";
import { CertificateState } from "../../types/cert";
import { CertificateForm } from "../CertificateForm";

export const CertificateComponent = () => {
  const state = useSelector<RootStateCertificate, CertificateState>(
    (state) => state.cert
  );
  const dispatch = useDispatch();

  return (
    <>
      {state.isShow ? (
        <>
          <div className={classes.studentContainer}>
            <CertificateForm
              id={state.id}
              number={state.number}
              fullName={state.fullName}
              direction={state.direction}
              dateStart={state.dateStart}
              dateFinish={state.dateFinish}
              features={state.features}
              isShow={state.isShow}
              in_progress={state.in_progress}
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
                  <p
                    className={`${classes.mainText__white} ${classes.userText}`}
                  >
                    {state.fullName[0]} {state.fullName[1]} {state.fullName[2]}
                  </p>
                </div>
              </div>
              <div className={classes.yellowBlock}>
                <p
                  className={`${classes.mainText} ${classes.mainText__yellow} ${classes.yellowText}`}
                >
                  Направление подготовки {state.direction}
                </p>
                <p
                  className={`${classes.mainText} ${classes.mainText__yellow}`}
                >
                  период обучения {state.dateStart}-{state.dateFinish}
                </p>
                <div className={classes.yellowButtonsBlock}>
                  {state.features.map((feature: any) => (
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
        </>
      ) : null}
    </>
  );
};
