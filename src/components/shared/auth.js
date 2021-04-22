import styled from "styled-components";

import RegisterImg from "../../assets/images/register.png";

const RegisterWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${RegisterImg}) center bottom / contain no-repeat;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: #f7fbff;
`;

const Btn = styled.button`
  padding: 10px 45px;
  background-color: #f2726f;
  border: none;
  cursor: pointer;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 0.3s;
  &:hover {
    background-color: #d86765;
  }
`;

export { RegisterWrapper, Btn };
