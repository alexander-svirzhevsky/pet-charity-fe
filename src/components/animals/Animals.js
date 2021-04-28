import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getAnimals } from "../../redux/thunks/animal";
import { Btn } from "../shared/auth";
import { AnimalItem } from "./AnimalItem";
import { Container } from "../shared/layout";

const AnimalList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Animals = () => {
  const dispatch = useDispatch();

  const animals = useSelector((state) => state.animal.data);
  const loading = useSelector((state) => state.animal.loading);

  const onClick = () => {
    dispatch(getAnimals());
  };

  return (
    <Fragment>
      <Container>
        <h1>Animals</h1>
        <Btn onClick={onClick}>Show all pets</Btn>
        {loading ? (
          <span></span>
        ) : (
          <Fragment>
            <AnimalList>
              {animals.map((animal) => (
                <AnimalItem key={animal._id} animal={animal} />
              ))}
            </AnimalList>
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
};

export default Animals;
