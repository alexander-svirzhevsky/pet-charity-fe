import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAnimals } from "../../redux/thunks/animal";
import { Btn } from "../shared/styles/layout";
import { AnimalItem } from "./AnimalItem";
import { Container, List, Title } from "../shared/styles/layout";
import Spinner from "../shared/Spinner";

const Animals = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.animal);

  const onClick = () => {
    dispatch(getAnimals());
  };

  return (
    <Container>
      <Title color="#002169">Animals</Title>
      <Btn onClick={onClick}>Show all pets</Btn>
      {data === undefined ? (
        <span>To find a pet, click on this button</span>
      ) : loading ? (
        <Spinner />
      ) : (
        <List>
          {data.map((animal) => (
            <AnimalItem key={animal._id} animal={animal} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default Animals;
