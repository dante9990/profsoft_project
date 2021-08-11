import React from "react";
import { Container, Personal, Wrapper } from "../../Components";
import { Main } from "../../Layouts/Main";
import { MyCourses } from "../../Components/MyCourses";

export const PersonalPage = () => {
  return (
    <Main>
      <Wrapper theme={"dark"}>
        <Container>
          <Personal />
        </Container>
      </Wrapper>
      <Wrapper theme={"light"}>
        <Container>
          <MyCourses />
        </Container>
      </Wrapper>
    </Main>
  );
};
