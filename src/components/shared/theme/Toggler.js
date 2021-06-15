import React from "react";
import styled from "styled-components";
import Moon from "../../../assets/images/moon.png";
import { respondTo } from "../styles/media/respondTo";

const Button = styled.div`
  width: 45px;
  height: 45px;
  background-image: url(${Moon});
  background-size: 30px 30px;
  background-position: center, center;
  background-repeat: no-repeat;
  cursor: pointer;

  ${respondTo.phones`
     margin-right:30px
   `}
`;

const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme} />;
};

export default Toggle;
