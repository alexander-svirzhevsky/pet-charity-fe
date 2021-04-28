import React from "react";
import styled from "styled-components";

import Type from "./Type";
import Breed from "./Breed";
import Animal from "./Animal";
import { Container } from "../shared/layout";

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 50px;
  border-bottom: 2px solid #efefef;
  padding-bottom: 50px;
  text-align: center;
`;

const Admin = () => {
  return (
    <>
      <Container>
        <Row>
          <Type />
          <Breed />
        </Row>
        <Animal />
      </Container>
    </>
  );
};

export default Admin;
