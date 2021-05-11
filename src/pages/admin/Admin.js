import React from "react";

import AnimalTypeForm from "./components/AnimalTypeForm";
import AnimalBreedForm from "./components/AnimalBreedForm";
import AnimalForm from "./components/AnimalForm";
import ProfileForm from "./components/ProfileForm";
import { Container, Row } from "../../components/shared/styles/layout";

const Admin = () => {
  return (
    <Container>
      <Row justify="space-between" border="2px solid #efefef" padding="50px 0">
        <AnimalTypeForm />
        <AnimalBreedForm />
      </Row>
      <Row justify="space-between" padding="50px 0">
        <AnimalForm />
        <ProfileForm />
      </Row>
    </Container>
  );
};

export default Admin;
