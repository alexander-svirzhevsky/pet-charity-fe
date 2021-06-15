import styled from "styled-components";

import { respondTo } from "../media/respondTo";

const Burger = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  display: none;
  cursor: pointer;
  z-index: 300;
  position: fixed;

  div {
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.text};
    background-color: ${(proprs) => proprs.color};
    position: absolute;
    left: 0;
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    transform: ${(props) => props.transform};
    transition: all 0.3s linear;

    :first-child {
      top: 0;
      transform: ${({ burgerOpen }) =>
        burgerOpen ? "rotate(45deg)" : "rotate(0)"};
      top: ${({ burgerOpen }) => (burgerOpen ? "7px" : "0")};
    }

    :nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      opacity: ${({ burgerOpen }) => (burgerOpen ? "0" : "1")};
    }

    :nth-child(3) {
      bottom: 0;
      transform: ${({ burgerOpen }) =>
        burgerOpen ? "rotate(-45deg)" : "rotate(0)"};
      bottom: ${({ burgerOpen }) => (burgerOpen ? "9px" : "0")};
    }
  }

  ${respondTo.phones`
     display: block;
   `}
`;

export { Burger };
