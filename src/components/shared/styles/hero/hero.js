import styled from "styled-components";

import { respondTo } from "../media/respondTo";

const Hero = styled.div`
  position: relative;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  width: 45%;
  padding: 3%;
  color: #002169;

  ${respondTo.tablets`
     width: 70%;
   `}

  ${respondTo.phones`
     width: 80%;
   `}

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: block;
    background-color: #1f1f1e;
    opacity: 0.5;
    border-radius: 50px;
  }
`;

export { Hero, HeroContent };
