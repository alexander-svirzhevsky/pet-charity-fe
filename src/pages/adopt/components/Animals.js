import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAnimals } from "../../../redux/thunks/animal";
import { AnimalItem } from "./AnimalItem";
import {
  Container,
  List,
  Title,
} from "../../../components/shared/styles/layout";
import InfoNotFound from "../../../components/shared/notFound/InfoNotFound";

import Spinner from "../../../components/shared/spinner/Spinner";
import { colors } from "../../../components/shared/styles/global";

const Animals = () => {
  const dispatch = useDispatch();

  const { animals, loading } = useSelector((state) => state.animal);

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

  return (
    <Container>
      <Title color={colors.primary} textAlign="center">
        Animals
      </Title>
      {loading ? (
        <Spinner />
      ) : !loading && animals.length === 0 ? (
        <InfoNotFound to="/" text="no animals found"></InfoNotFound>
      ) : (
        <List>
          {animals.map((animal) => (
            <AnimalItem key={animal._id} animal={animal} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default Animals;
