import React from "react";

import { Main } from "../../Layouts/Main";
import { Container } from "../../Components/Container";
import { Wrapper } from "../../Components/Wrapper";
import { Information } from "../../Components/Information";
import { Certificate } from "../../Components/Certificate";
import { Directions } from "../../Components/Directions";

export const Content = () => {
  return (
    <div>
      <h1>В команду твоей мечты</h1>
    </div>
  );
};

export const Landing = () => {
  return (
    <Main>
      <Wrapper theme={"dark"}>
        <Container>
          <Information />
        </Container>
      </Wrapper>
      <Wrapper theme={"light"}>
        <Container>
          <Certificate />
        </Container>
      </Wrapper>
      <Wrapper theme={"dark"}>
        <Container>
          <Directions />
        </Container>
      </Wrapper>
    </Main>
  );
};
