import React from "react";
import { Main } from "../../Layouts/Main";
import { Container } from "../../Components/Container";
import { Wrapper } from "../../Components/Wrapper";
import { Description } from "../../Components/Description";
import { InputChecker } from "../../Components/InputChecker";
import { Directions } from "../../Components/Directions";

export const Landing = () => {
  return (
    <Main>
      <Wrapper theme={"dark"}>
        <Container>
          <Description />
        </Container>
      </Wrapper>
      <Wrapper theme={"light"}>
        <Container>
          <InputChecker />
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
