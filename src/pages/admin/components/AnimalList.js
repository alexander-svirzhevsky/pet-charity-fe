import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AnimalCard from "./AnimalCard";
import Pagination from "../../../components/shared/Pagination/Pagination";

import { getAnimals } from "../../../redux/thunks/animal";
import {
  Container,
  List,
  Title,
} from "../../../components/shared/styles/layout";
import InfoNotFound from "../../../components/shared/notFound/InfoNotFound";

import Spinner from "../../../components/shared/spinner/Spinner";
import { colors } from "../../../components/shared/styles/global";

const AnimalList = () => {
  const dispatch = useDispatch();

  const {
    animals,
    loading,
    pageSize,
    totalAnimalsCount,
    currentPage,
  } = useSelector((state) => state.animal);

  useEffect(() => {
    dispatch(getAnimals(currentPage, pageSize));
  }, [dispatch]);
  return (
    <Container>
      <Title color={colors.primary} textAlign="center">
        Animals
      </Title>
      <Pagination
        totalAnimalsCount={totalAnimalsCount}
        pageSize={pageSize}
        currentPage={currentPage}
      />
      {loading ? (
        <Spinner />
      ) : !loading && animals.length === 0 ? (
        <InfoNotFound to="/" text="no animals found"></InfoNotFound>
      ) : (
        <List>
          {animals.map((animal) => (
            <AnimalCard key={animal._id} animal={animal} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default AnimalList;
