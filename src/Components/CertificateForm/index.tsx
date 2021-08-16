import React from "react";
import { CertificateState } from "../../types/cert";
import classes from "./certificateForm.module.scss";

export const CertificateForm = (certificate: CertificateState) => {
  return (
    <>
      <div className={classes.studentMainInfo}>
        <div className={classes.cert_items}>
          <p className={classes.itemHeader__greyHeader}>Сертификат</p>
          <p className={classes.secondItems}>№ {certificate.number}</p>
        </div>

        <div className={classes.cert_items}>
          <p className={classes.itemHeader}>
            {certificate.fullName[0]} {certificate.fullName[1]}
          </p>
          <p className={classes.secondItems}>{certificate.fullName[2]}</p>
        </div>
      </div>
      <div>
        <div className={classes.cert_items}>
          <p className={classes.itemHeader__greyHeader}>
            Направление подготовки{" "}
          </p>
          <p className={classes.secondItems}>{certificate.direction}</p>
        </div>
        <div className={classes.cert_items}>
          <p className={classes.itemHeader__greyHeader}>Период обучения</p>
          <p className={classes.secondItems}>
            {certificate.dateStart}-{certificate.dateFinish}
          </p>
        </div>
        <div className={classes.cert_items}>
          <p className={classes.itemHeader__greyHeader}>Изучено </p>
          {certificate.features.map((feature: any) => (
            <p key={feature.id} className={classes.secondItems}>
              {feature.name};
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
