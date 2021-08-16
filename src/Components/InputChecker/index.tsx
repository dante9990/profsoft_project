import classes from "./inputChecker.module.scss";
import React, { useState } from "react";
import { Text } from "../Text";
import NumberFormat from "react-number-format";
import { Element } from "react-scroll";
import { CertificateContent } from "../Certificate/index";
import { RootStateCertificate } from "../../redux/type";
import {
  changeShow,
  getCertFunc,
  deleteCert,
} from "../../redux/actions-create/certificateAction";
import { useDispatch, useSelector } from "react-redux";
import { certificates } from "../../redux/data";
import { CertificateState } from "../../types/cert";

export const InputChecker = () => {
  const state = useSelector<RootStateCertificate, CertificateState>(
    (state) => state.cert
  );
  const dispatch = useDispatch();

  const [values, setValues] = useState("");
  const [inputActive, setInputActive] = useState(false);
  const [buttonChecker, setButtonChecker] = useState(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const certificateNumber = async (ev: string) => {
    setValues(ev);
    let count = 0;
    for (let i = 0; i < ev.length; i++) {
      if (ev[i] !== "-") count++;
    }

    const certArr = certificates.filter(
      (certificate) => certificate.number === ev
    );

    if (count === 14 && certArr.length !== 0 && state.number == "") {
      await dispatch(
        getCertFunc({
          id: certArr[0].id,
          number: certArr[0].number,
          fullName: certArr[0].fullName,
          direction: certArr[0].direction,
          dateFinish: certArr[0].dateFinish,
          dateStart: certArr[0].dateStart,
          features: certArr[0].features,
          isShow: false,
        })
      );

      setInputActive(true);
    } else if (certArr.length === 0 && !(state.isShow && buttonChecker)) {
      dispatch(deleteCert());
      setButtonChecker(false);
      setInputActive(false);
    }
  };

  const clickLogic = () => {
    setButtonChecker(true);
    if (!(inputActive && buttonChecker)) {
      dispatch(
        changeShow({
          id: state.id,
          number: state.number,
          fullName: state.fullName,
          direction: state.direction,
          dateFinish: state.dateFinish,
          dateStart: state.dateStart,
          features: state.features,
          isShow: state.isShow,
        })
      );
    } else {
      dispatch(deleteCert());
      setButtonChecker(false);
      setInputActive(false);
    }
  };

  return (
    <div className={classes.certificate}>
      <p className={classes.certHeader}>
        <Text
          theme={"light"}
          color={"black"}
          type={"secondHeader"}
          text={"Проверить сертификат"}
        />
      </p>

      <p className={classes.descriptionText}>
        <Text
          theme={"light"}
          color={"black"}
          type={"description"}
          text={"Введите номер сертификата для проверки подлинности"}
        />
      </p>
      <form onSubmit={handleSubmit}>
        <div className={classes.arr}>
          <Element id="inputEl" name="example-destination">
            <NumberFormat
              value={values}
              type="text"
              onChange={(e) => certificateNumber(e.target.value)}
              className={`${classes.inputForm} ${classes.inputEl}`}
              placeholder="08-09270-7321897"
              format="##-#####-#######"
            />
            <button
              type="submit"
              className={
                inputActive && buttonChecker
                  ? classes.retry
                  : inputActive
                  ? classes.black_arrow
                  : classes.wh_arrow
              }
              onClick={() => (inputActive ? clickLogic() : null)}
            />
          </Element>
        </div>
      </form>
      {inputActive && buttonChecker ? (
        <div className={classes.certInfo}>
          <CertificateContent />
        </div>
      ) : null}
    </div>
  );
};
