import React from "react";
import classes from "./openCertificate.module.scss";
import { ReactComponent as Men } from "../../assets/yellowMen.svg";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Signature } from "../../assets/signature.svg";
import { Certificate } from "../../Context/certificate";

export const OpenCertificate = (certificate: Certificate) => {
  return (
    <>
      <div className={classes.certificate}>
        <div className={classes.openCertificate}>
          <div className={classes.openCertificate__info}>
            <div className={classes.openCertificate__info__certificateTitle}>
              <p className={classes.greyLightText}>Сертификат</p>
              <p className={classes.blackText}>№ 08-09270-7321897 </p>
              <div
                className={
                  classes.openCertificate__info__certificateTitle__name
                }
              >
                <p className={classes.blackText}>{certificate.fullName} </p>
              </div>
            </div>
            <div className={classes.openCertificate__info__certificateInfo}>
              <p className={classes.greyLightText}>Направление подготовки: </p>
              <p className={classes.blackText}>{certificate.direction} </p>
            </div>
            <div className={classes.openCertificate__info__certificatePeriod}>
              <p className={classes.greyLightText}>Период обучения: </p>
              <p className={classes.blackText}>
                {certificate.dateStart}-{certificate.dateFinish}{" "}
              </p>
            </div>
            <div className={classes.openCertificate__info__certificateLearn}>
              <p className={classes.greyLightText}>Изучено: </p>
              {certificate.features.map((feature) => (
                <p className={classes.blackText} key={feature.id}>
                  {feature.name}
                </p>
              ))}
            </div>
          </div>
          <div className={classes.openCertificate__card}>
            <div className={classes.openCertificate__card__blackSquare}>
              <Men
                className={classes.openCertificate__card__blackSquare__men}
              />
              <div
                className={
                  classes.openCertificate__card__blackSquare__blockInfo
                }
              >
                <Logo
                  className={
                    classes.openCertificate__card__blackSquare__blockInfo__logo
                  }
                />
                <p
                  className={
                    classes.openCertificate__card__blackSquare__blockInfo__certificate
                  }
                >
                  Сертификат <br /> о прохождении обучения
                </p>
                <p
                  className={
                    classes.openCertificate__card__blackSquare__blockInfo__name
                  }
                >
                  {certificate.fullName}
                </p>
                <hr
                  style={{
                    margin: "2px 0",
                    border: "0.361751px solid #FFFFFF",
                  }}
                />
                <p
                  className={
                    classes.openCertificate__card__blackSquare__blockInfo__period
                  }
                >
                  Направление подготовки {certificate.direction} <br /> период
                  обучения
                  {certificate.dateStart}-{certificate.dateFinish}
                </p>
                {certificate.features.map((feature) => (
                  <button
                    key={feature.id}
                    className={
                      classes.openCertificate__card__blackSquare__blockInfo__button
                    }
                  >
                    {feature.name}
                  </button>
                ))}
                <p
                  className={
                    classes.openCertificate__card__blackSquare__blockInfo__director
                  }
                >
                  Директор ООО ProfSoft <br /> Каплин К.О.
                </p>
                <Signature
                  className={
                    classes.openCertificate__card__blackSquare__blockInfo__signature
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <p className={classes.link}>поделиться</p>
      </div>
    </>
  );
};
