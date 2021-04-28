import React from "react";
import styled from "styled-components";

import PetCharity from "../../assets/video/petCharity.mp4";

const HeroWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  object-fit: contain;
  z-index: -1;
`;

const Video = styled.video`
  position: absolute;
  width: 100vw;
  height: 720px;
  object-fit: cover;
  z-index: -1;
`;

const Landing = () => {
  return (
    <HeroWrapper>
      <Video autoPlay loop muted>
        <source src={PetCharity} type="video/mp4" />
      </Video>
    </HeroWrapper>
  );
};

export default Landing;
