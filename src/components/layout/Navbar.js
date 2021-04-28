import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { logout } from "../../redux/thunks/auth";
import { Container } from "../shared/layout";
import NavbarItem from "../shared/NavbarItem";

const Header = styled.header`
  color: #002169;
  font-size: 1.125rem;
  font-weight: 800;
  line-height: 28px;
  width: 100%;
  border-bottom: 2px solid #efefef;
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
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <Header>
      <Container>
        <Account>
          {isAdmin && <NavbarItem to="/admin" text="Admin panel" />}
          <NavbarItem to="/" text="Home" />
          <NavbarItem to="/adopt" text="Find a pet" />
          {isAuthenticated ? (
            <NavbarItem onClick={logOut} to="#" text="Logout"></NavbarItem>
          ) : (
            <>
              <NavbarItem to="/register" text="Sign Up" />
              <NavbarItem to="/login" text="Sign In" />
            </>
          )}
        </Account>
      </Container>
    </Header>
  );
};

export default Navbar;
