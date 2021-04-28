import styled from "styled-components";

import RegisterImg from "../../assets/images/cat3.jpg";

const RegisterWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background: url(${RegisterImg}) center center / cover no-repeat;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: #f7fbff;
  color: #002169;
`;

const Btn = styled.button`
  background-color: #fff;
  border: #00b8e0 0.125rem solid;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding: 1rem 3rem;
  color: #002169;
  border-radius: 2rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #00b8e0;
    color: #fff;
    border: #00b8e0 0.125rem solid;
  }
`;

export { RegisterWrapper, Btn };
