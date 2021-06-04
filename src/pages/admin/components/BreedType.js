import React from "react";

import AnimalTypeForm from "./AnimalTypeForm";
import AnimalBreedForm from "./AnimalBreedForm";
import {
  Container,
  FormContent,
} from "../../../components/shared/styles/layout";

const BreedType = () => {
  return (
    <Container textAling="center">
      <FormContent>
        <AnimalTypeForm />
        <AnimalBreedForm />
      </FormContent>
    </Container>
  );
};

export default BreedType;
