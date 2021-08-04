import React, { useContext, useState } from "react";
import classes from "./certificate.module.scss";
import { Input } from "../Input";
import NumberFormat from "react-number-format";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as ArrowActive } from "../../assets/arrow-black.svg";
import { ReactComponent as Repeat } from "../../assets/repeat.svg";
import { Container } from "../Container";
import { OpenCertificate } from "../OpenCertificate";
import { Wrapper } from "../Wrapper";
import { Certificate, CertificateContext } from "../../Context/certificate";

export const CertificateCom = () => {
  const [input, setInput] = useState("");
  const { isShow, certificate, fillData, hideCert } =
    useContext(CertificateContext);
  const simulation = () => {
    const data: Certificate = {
      id: 1,
      fullName: "Солдатов Алексей Алексеевич",
      direction: "Frontend",
      dateFinish: "01.09.2021",
      dateStart: "05.07.2021",
      features: [
        {
          id: 1,
          name: "Context",
        },
        {
          id: 2,
          name: "Material UI",
        },
      ],
    };

    fillData(data);
  };
  const inputChange = (e: any) => {
    if (e.target) {
      setInput(e.target.value);
      console.log(input.length);
    }
  };

  return (
    <>
      <div className={classes.content}>
        <h2>проверить сертификат</h2>
        <p>Введите номер сертификата для проверки подлинности</p>
        <div className={classes.inputBar}>
          <NumberFormat
            className={classes.format}
            format="##-#####-#######"
            mask="_"
            placeholder="08-09270-7321897"
            value={input}
            onChange={inputChange}
          />
          {input.length === 16 ? (
            <ArrowActive className={classes.arrow} onClick={simulation} />
          ) : isShow ? (
            <Repeat className={classes.arrow} />
          ) : (
            <Arrow className={classes.arrow} />
          )}
        </div>
      </div>
      <Wrapper theme={"light"}>
        <Container>
          {isShow ? (
            <OpenCertificate
              id={certificate.id}
              fullName={certificate.fullName}
              direction={certificate.direction}
              dateStart={certificate.dateStart}
              dateFinish={certificate.dateFinish}
              features={certificate.features}
            />
          ) : null}
        </Container>
      </Wrapper>
    </>
  );
};
