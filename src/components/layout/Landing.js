import React from "react";
import styled from "styled-components";

import { Container } from "../shared/layout";
import HeroImg from "../../assets/images/hero.png";

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${HeroImg}) center center / cover no-repeat;
`;

const WrapperLanding = styled.div`
  padding: 80px 20px;
`;

const Landing = () => {
  return (
    <HeroWrapper>
      {" "}
      <Container>
        <WrapperLanding>Landing</WrapperLanding>
      </Container>{" "}
    </HeroWrapper>
  );
};

export default Landing;
