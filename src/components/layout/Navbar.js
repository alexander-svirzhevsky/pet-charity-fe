import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { logout } from "../../redux/thunks/auth";
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

const Account = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Item = styled.li`
  margin-right: 10px;
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const logOut = () => dispatch(logout());

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const authLinks = (
    <Item>
      <a onClick={logOut} href="#!">
        Logout
      </a>
    </Item>
  );

  const guestLinks = (
    <>
      <Item>
        <Link to="/register">Sign Up</Link>
      </Item>
      <Item>
        <Link to="/login">Sign In</Link>
      </Item>
    </>
  );

  return (
    <Header>
      <Container>
        <Account>{isAuthenticated ? authLinks : guestLinks}</Account>
      </Container>
    </Header>
  );
};

export default Navbar;
