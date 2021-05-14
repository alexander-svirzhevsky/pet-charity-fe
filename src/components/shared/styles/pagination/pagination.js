import styled from "styled-components";

const PageLink = styled.span`
  display: flex;
  height: 30px;
  width: 30px;
  color: "#002169";
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  font-size: 15px;
  font-weight: 600;
  border-radius: 20px;
  margin-right: 5px;

  &:hover {
    background-color: #00b8e0;
    color: #fff;
  }
`;

const Arrow = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 5px #11111111;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00b8e0;
    color: #fff;
  }
`;

export { PageLink, Arrow };
