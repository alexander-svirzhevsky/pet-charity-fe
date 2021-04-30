import React from "react";

import Type from "./Type";
import Breed from "./Breed";
import Animal from "./Animal";
import { Container, Row } from "../shared/styles/layout";

const Admin = () => {
  return (
    <Container>
      <Row justify="space-evenly" border="2px solid #efefef" padding="50px 0">
        <Type />
        <Breed />
      </Row>
      <Animal />
    </Container>
  );
};

export default Admin;
