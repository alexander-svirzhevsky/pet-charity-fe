import styled from "styled-components";

const Hero = styled.div`
  position: relative;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  width: 45%;
  padding: 35px 25px;
  color: #002169;

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
