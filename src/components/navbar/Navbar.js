import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogoutOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { logout } from "../../redux/thunks/auth";
import { Container, Header, Row } from "../shared/styles/layout";
import { colors } from "../../components/shared/styles/global";
import NavbarItem from "./NavbarItem";

const User = styled.div`
  padding: 20px 15px;
`;
const UserName = styled.div`
  display: inline-block;
  margin-right: 10px;
  color: #00b8e0;
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const logOut = () => dispatch(logout());

  const { isAuthenticated, isAdmin, user } = useSelector((state) => state.auth);

  return (
    <Header>
      <Container>
        <Row justify="flex-end">
          {isAdmin && <NavbarItem to="/admin" text="Admin panel" />}
          <NavbarItem to="/" text="Home" />
          <NavbarItem to="/profile" text="Find a pet" />
          {isAuthenticated ? (
            <User>
              {user && <UserName>{user.data.name}</UserName>}
              <LogoutOutlined
                onClick={logOut}
                style={{ color: colors.secondary }}
              />
            </User>
          ) : (
            <>
              <NavbarItem to="/register" text="Sign Up" />
              <NavbarItem to="/login" text="Sign In" />
            </>
          )}
        </Row>
      </Container>
    </Header>
  );
};

export default Navbar;
