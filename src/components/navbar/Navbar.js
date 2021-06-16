import React, { useState, useRef } from "react";
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
import { Burger } from "../shared/styles/navbar/burger";
import { NavList } from "../shared/styles/navbar/navigation";
import { useOnClickOutside } from "./hook";

const User = styled.div`
  padding: 20px 15px;
`;
const UserName = styled.div`
  display: inline-block;
  margin-right: 10px;
  color: #00b8e0;
`;

const Navbar = ({ theme, themeToggler, setLocale }) => {
  const node = useRef();
  useOnClickOutside(node, () => setBurgerOpen(false));

  const dispatch = useDispatch();

  const [burgerOpen, setBurgerOpen] = useState(false);

  const logOut = () => dispatch(logout());

  const { isAuthenticated, isAdmin, user } = useSelector((state) => state.auth);

  const { Option } = Select;

  function handleChange(value) {
    setLocale(value);
  }

  return (
    <Header>
      <Container>
        <Row ref={node} justify="flex-end" alignItems="center">
          <NavList burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}>
            {isAdmin && (
              <NavbarItem to="/admin" text={Translate("adminPanel")} />
            )}
            <NavbarItem to="/" text={Translate("home")} />
            <NavbarItem to="/profile" text={Translate("findPet")} />
            {isAuthenticated ? (
              <User>
                {user && <UserName>{user.data.name.split(" ", 1)}</UserName>}
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
          </NavList>
          <Select
            defaultValue="ENG"
            style={{ width: 80 }}
            onChange={handleChange}
          >
            <Option value="en-us">ENG</Option>
            <Option value="fr-ca">FR</Option>
            <Option value="de-de">DE</Option>
            <Option value="ru-ru">RU</Option>
          </Select>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Burger
            burgerOpen={burgerOpen}
            onClick={() => setBurgerOpen(!burgerOpen)}
          >
            <div top="0" />
            <div top="50%" transform="translateY(-50%)" />
            <div bottom="0" />
          </Burger>
        </Row>
      </Container>
    </Header>
  );
};

export default Navbar;
