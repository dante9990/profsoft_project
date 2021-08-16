import React, { FC, ReactElement, useRef, useState } from "react";

import { Header } from "../../Components/Header";
import { Container } from "../../Components/Container";
import { Wrapper } from "../../Components/Wrapper";
import { Footer } from "../../Components/Footer";

import classes from "./main.module.scss";
import { Menu } from "../../Components/MobileMenu";

interface Props {
  children: ReactElement | ReactElement[] | string;
}

export const Main: FC<Props> = ({ children }: Props) => {
  const [menuActive, setMenuActive] = useState(false);

  return menuActive ? (
    <Menu active={menuActive} setActive={setMenuActive} />
  ) : (
    <div className={classes.main}>
      <Wrapper theme={"dark"}>
        <Container>
          <Header active={menuActive} setActive={setMenuActive} />
        </Container>
      </Wrapper>
      {children}
      <Wrapper theme={"dark"}>
        <Container>
          <Footer />
        </Container>
      </Wrapper>
    </div>
  );
};
