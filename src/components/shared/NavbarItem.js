import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyLink = styled(Link)`
  margin-right: 10px;
  padding: 10px;
  padding: 1rem 0.75rem;
  &:hover {
    background-color: #00b8e0;
    color: #fff;
  }
`;

const LiItem = styled.li`
  padding: 20px 15px;
  &:hover {
    background-color: #00b8e0;
    color: #fff;
  }
`;

const NavbarItem = ({ to, text, onClick }) => {
  return (
    <LiItem>
      <MyLink onClick={onClick} to={to}>
        {text}
      </MyLink>
    </LiItem>
  );
};

export default NavbarItem;
