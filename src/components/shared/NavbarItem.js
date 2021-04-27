import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyLink = styled(Link)`
  margin-right: 10px;
`;

const NavbarItem = ({ to, text, onClick }) => {
  return (
    <li>
      <MyLink onClick={onClick} to={to}>
        {text}
      </MyLink>
    </li>
  );
};

export default NavbarItem;
