import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Container = styled.div`
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
`;

const Navbar = () => {
  return (
    <>
      <Header>
        <Container>
          <ul>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </Container>
      </Header>
    </>

    // <Header>
    //   <div className="logo" />
    //   <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
    //     <Menu.Item key="1">nav 1</Menu.Item>
    //     <Menu.Item key="2">nav 2</Menu.Item>
    //     <Menu.Item key="3">nav 3</Menu.Item>
    //   </Menu>
    // </Header>
  );
};

export default Navbar;
