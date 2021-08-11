import React, { useState } from "react";
import classes from "./openBlock.module.scss";
import { ReactComponent as Men } from "../../assets/yellowMen.svg";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Signature } from "../../assets/signature.svg";
import { useDispatch, useSelector } from "react-redux";
import { CertificateState, RootStateCertificate } from "../../redux/type";
import {
  changeFlagAction,
  deleteCertificateAction,
  getCertificateAction,
} from "../../redux/actions/certAction";
import NumberFormat from "react-number-format";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as Repeat } from "../../assets/repeat.svg";
import { Certificate } from "../Certificate";

export const OpenBlock = (props: any) => {
  const [value, setValue] = useState("");
  const state = useSelector<RootStateCertificate, CertificateState>(
    (state) => state.cert
  );
  const dispatch = useDispatch();

  function handleChange(event: any) {
    setValue(event.target.value);
    const res = value.split("-").join("").trim();
    if (res.length === 14) {
      event.target.parentNode.children[1].style.display = "none";
      event.target.parentNode.children[2].style.display = "block";

      setCertificate(Number(res));
      changeFlag(Number(res));
    }
  }

  const setCertificate = (number: number) => {
    const data = {
      fullName: "Солдатов Алексей Алексеевич",
      dateStart: "01.01.0001",
      dateFinish: "07.08.2021",
      number: number,
      direction: "Frontend",
      features: [
        { id: 1, name: "Redux" },
        { id: 2, name: "React" },
      ],
    };

    dispatch(getCertificateAction(data));
  };

  const changeFlag = (number: number) => {
    const data = {
      fullName: "Солдатов Алексей Алексеевич",
      dateStart: "01.01.0001",
      dateFinish: "07.08.2021",
      number: number,
      direction: "Frontend",
      features: [
        { id: 1, name: "Redux" },
        { id: 2, name: "React" },
      ],
    };

    dispatch(changeFlagAction(data));
  };

  const sendForm = () => {
    const data = {
      fullName: "Солдатов Алексей Алексеевич",
      dateStart: "01.01.0001",
      dateFinish: "07.08.2021",
      number: 0,
      direction: "Frontend",
      features: [
        { id: 1, name: "Redux" },
        { id: 2, name: "React" },
      ],
      isShow: true,
    };

    setValue("");

    dispatch(changeFlagAction(data));
  };

  const showBlock = () => {
    return (
      <>
        <div className={classes.openBlock}>
          <div className={classes.openBlock__info}>
            <div className={classes.openBlock__info__certificateTitle}>
              <p className={classes.greyLightText}>Сертификат</p>
              <p className={classes.blackText}>№ {state.number}</p>
              <div className={classes.openBlock__info__certificateTitle__name}>
                <p className={classes.blackText}>{state.fullName}</p>
              </div>
            </div>
            <div className={classes.openBlock__info__certificateInfo}>
              <p className={classes.greyLightText}>Преподователь: </p>
              <p className={classes.blackText}>Щелкунова Ю.С </p>
            </div>
            <div className={classes.openBlock__info__certificateInfo}>
              <p className={classes.greyLightText}>Направление подготовки: </p>
              <p className={classes.blackText}>{state.direction}</p>
            </div>
            <div className={classes.openBlock__info__certificatePeriod}>
              <p className={classes.greyLightText}>Период обучения: </p>
              <p className={classes.blackText}>
                {state.dateStart}-{state.dateFinish}
              </p>
            </div>
            <div className={classes.openBlock__info__certificateLearn}>
              <p className={classes.greyLightText}>Изучено: </p>
              <p className={classes.blackText}>{state.features[0].name}; </p>
              <p className={classes.blackText}>{state.features[1].name}; </p>
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
                  {state.fullName}
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
                  Направление подготовки {state.direction} <br />
                  период обучения {state.dateStart}-{state.dateFinish}
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

  const showInput = () => {
    return (
      <>
        <div className={classes.content}>
          <h2>проверить сертификат</h2>
          <p>Введите номер сертификата для проверки подлинности</p>
          <div className={classes.inputBar}>
            <NumberFormat
              className={classes.format}
              format="##-#####-#######"
              placeholder="08-09270-7321897"
              value={value}
              onChange={handleChange}
            />
            <button className={classes.arrow}>
              <Arrow />
            </button>
            <Repeat className={classes.repeat} onClick={sendForm} />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {!props.show ? showInput() : ""}
      {state.isShow ? showBlock() : ""}
      {props.show ? showBlock() : ""}
    </>
  );
};
