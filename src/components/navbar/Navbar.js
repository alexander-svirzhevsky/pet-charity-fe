import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Translate from "../../assets/i18n/Translate";
import Toggle from "../../components/shared/theme/Toggler";
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

const Navbar = ({ theme, themeToggler, setLocale }) => {
  const dispatch = useDispatch();

  const logOut = () => dispatch(logout());

  const { isAuthenticated, isAdmin, user } = useSelector((state) => state.auth);

  const { Option } = Select;

  function handleChange(value) {
    setLocale(value);
  }

  return (
    <Header>
      <Container>
        <Row justify="flex-end" alignItems="center">
          {isAdmin && <NavbarItem to="/admin" text={Translate("adminPanel")} />}
          <NavbarItem to="/" text={Translate("home")} />
          <NavbarItem to="/profile" text={Translate("findPet")} />
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
              <NavbarItem to="/register" text={Translate("signUp")} />
              <NavbarItem to="/login" text={Translate("signIn")} />
            </>
          )}
          <Select
            defaultValue="ENG"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="en-us">ENG</Option>
            <Option value="fr-ca">FR</Option>
            <Option value="de-de">DE</Option>
            <Option value="ru-ru">RU</Option>
          </Select>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </Row>
      </Container>
    </Header>
  );
};

export default Navbar;
