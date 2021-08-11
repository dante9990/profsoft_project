import React, { useContext, useEffect } from "react";

import { Main } from "../../Layouts/Main";
import {
  Container,
  Directions,
  Information,
  Wrapper,
  OpenBlock,
} from "../../Components";

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
          <OpenBlock />
        </Container>
      </Wrapper>
      <Wrapper theme={"dark"}>
        <Container>
          <Directions />
        </Container>
      </Wrapper>
      {/*  <Button onClick={setLogin}>Auth</Button>*/}
      {/*  <Button onClick={setLogout}>Exit</Button>*/}
      {/*  <>*/}
      {/*{state.name ? (*/}
      {/*  <p style={{ color: "#000" }}>Вас зовут: {state.login}</p>*/}
      {/*) : (*/}
      {/*  <p>вы не авторизованы</p>*/}
      {/*)}*/}
      {/*  </>*/}
    </Main>
  );
};
