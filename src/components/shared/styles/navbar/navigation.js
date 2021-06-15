import styled from "styled-components";
import { Link } from "react-router-dom";

import { respondTo } from "../media/respondTo";

const Navigation = styled(Link)`
  margin-right: 10px;
  padding: 20px 15px;
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.hover};
    color: ${({ theme }) => theme.textHover};
  }

  ${respondTo.tablets`
     padding: 10px;
     margin-right: 0;
   `}
`;

const NavList = styled.div`
  transition: all 0.3s linear;
  ${respondTo.phones`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    background-color: ${({ theme }) => theme.burger};
    z-index: 200;
    position: fixed;
    transform: ${({ burgerOpen }) =>
      burgerOpen ? "translateX(100%)" : "translateX(300%)"};
   `}
`;

export { Navigation, NavList };
