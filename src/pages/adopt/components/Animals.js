import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/shared/Pagination/Pagination";

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
import Filter from "../../../components/shared/filter/Filter";

const Animals = () => {
  const dispatch = useDispatch();

  const {
    animals,
    loading,
    pageSize,
    totalAnimalsCount,
    currentPage,
    filter,
  } = useSelector((state) => state.animal);

  useEffect(() => {
    dispatch(getAnimals(currentPage, pageSize));
  }, [dispatch]);


  return (
    <Container>
      <Title color={colors.primary} textAlign="center">
        Animals
      </Title>
      <Filter></Filter>
      <Pagination
        totalAnimalsCount={totalAnimalsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        count={animals}
      />
      {loading ? (
        <Spinner />
      ) : !loading && animals.length === 0 ? (
        <InfoNotFound to="/" text="no animals found"></InfoNotFound>
      ) : (
        <List>
          {animals.animals.map((animal) => (
            <AnimalItem key={animal._id} animal={animal} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default Animals;
