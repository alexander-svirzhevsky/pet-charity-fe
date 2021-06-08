import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled(Link)`
  margin-right: 10px;
  padding: 10px;
  padding: 20px 15px;
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.hover};
    color: ${({ theme }) => theme.textHover};
  }
`;

const NavbarItem = ({ to, text, onClick }) => {
  return (
    <Navigation onClick={onClick} to={to}>
      {text}
    </Navigation>
  );
};

export default NavbarItem;
