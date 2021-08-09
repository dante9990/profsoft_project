import React from "react";
import { Container, Personal, Wrapper } from "../../Components";
import { Main } from "../../Layouts/Main";

export const PersonalPage = () => {
  return (
    <Main>
      <Wrapper theme={"dark"}>
        <Container>
          <Personal />
        </Container>
      </Wrapper>
    </Main>
  );
};
