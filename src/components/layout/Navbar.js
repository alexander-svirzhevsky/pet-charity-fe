import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { logout } from "../../redux/thunks/auth";
import { Container } from "../shared/layout";
import NavbarItem from "../shared/NavbarItem";

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

const Navbar = () => {
  const dispatch = useDispatch();

  const logOut = () => dispatch(logout());

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Header>
      <Container>
        <Account>
          {isAuthenticated ? (
            <NavbarItem onClick={logOut} to="#" text="logout"></NavbarItem>
          ) : (
            <>
              <NavbarItem to="/register" text="sign up" />
              <NavbarItem to="/login" text="sign in" />
            </>
          )}
        </Account>
      </Container>
    </Header>
  );
};

export default Navbar;
