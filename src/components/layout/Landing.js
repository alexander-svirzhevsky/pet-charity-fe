import React from "react";
import styled from "styled-components";

import HeroImg from "../../assets/images/hero.png";

const Container = styled.div`
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 100px;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${HeroImg}) center center / cover no-repeat;
`;

const Landing = () => {
  return (
    <>
      <HeroWrapper>
        {" "}
        <Container>Landing</Container>{" "}
      </HeroWrapper>
    </>
  );
};

export default Landing;
