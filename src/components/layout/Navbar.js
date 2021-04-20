import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../shared/layout";

const Header = styled.header`
  padding: 20px 20px;
  background-color: #484c9a;
  border-radius: 100px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0%;
  right: 0%;
  width: 100%;
`;

const Navbar = () => {
  return (
    <Header>
      <Container>
        <ul>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      </Container>
    </Header>
  );
};

export default Navbar;
