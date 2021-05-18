import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PaginationList from "../../../components/shared/Pagination/Pagination";
import { getAnimals, setFilter } from "../../../redux/thunks/animal";
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

  const { animals, loading } = useSelector((state) => state.animal);

  const pageSize = 10;
  const currentPage = 1;

  const onPageChange = (pageNumber) => {
    dispatch(getAnimals(pageNumber, pageSize, "", ""));
  };

  useEffect(() => {
    dispatch(getAnimals(currentPage, pageSize, "", ""));
  }, [dispatch]);

  return (
    <Container>
      <Title color={colors.primary} textAlign="center">
        Animals
      </Title>
      <Filter currentPage={currentPage} pageSize={pageSize}></Filter>
      <PaginationList
        pageSize={pageSize}
        currentPage={currentPage}
        count={animals.count}
        pageSize={pageSize}
        onPageChange={onPageChange}
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
