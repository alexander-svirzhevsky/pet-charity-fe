import React from "react";

import AnimalTypeForm from "./AnimalTypeForm";
import AnimalBreedForm from "./AnimalBreedForm";
import { Row, Container } from "../../../components/shared/styles/layout";

const BreedType = () => {
  return (
    <Container>
      <Row justify="space-between" padding="50px 0">
        <AnimalTypeForm />
        <AnimalBreedForm />
      </Row>
    </Container>
  );
};

export default BreedType;
