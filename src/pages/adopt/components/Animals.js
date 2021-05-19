import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";

import { getAnimals } from "../../../redux/thunks/animal";
import { AnimalItem } from "./AnimalItem";
import {
  Container,
  List,
  Title,
  Btn,
} from "../../../components/shared/styles/layout";

import Spinner from "../../../components/shared/spinner/Spinner";
import { colors } from "../../../components/shared/styles/global";
import Filter from "../../../components/shared/filter/Filter";
import { useHistory } from "react-router";
import * as queryString from "querystring";

const Animals = () => {
  const [filterCriteria, setFilterCriteria] = useState({
    currentPage: 1,
    pageSize: 10,
    type: "",
    sex: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const { currentPage, pageSize, sex, type } = filterCriteria;
  const { animals, loading } = useSelector((state) => state.animal);

  const onPageChange = (page) => {
    setFilterCriteria({ ...filterCriteria, currentPage: page });
    // dispatch(getAnimals(page, pageSize, type, sex));
  };

  const onFiltersSubmit = (props) => {
    setFilterCriteria({ ...filterCriteria, type: props.type, sex: props.sex });
    // dispatch(getAnimals(1, pageSize, props.type, props.sex));
  };

  const onClear = () => {
    setFilterCriteria({
      currentPage: 1,
      pageSize: 10,
      sex: "",
      type: "",
    });
    // dispatch(getAnimals(currentPage, pageSize, type, sex));
  };

  useEffect(() => {
    const { search } = history.location;
    const parsed = queryString.parse(search.substr(1));

    setFilterCriteria({
      ...filterCriteria,
      currentPage: Number(parsed.page),
      type: parsed.type,
      sex: parsed.sex,
    });
  }, []);

  useEffect(() => {
    // const query = {};

    // if (filterCriteria.currentPage > 1) {
    //   query.page = String(filterCriteria.currentPage);
    // }

    // if (filterCriteria.type) {
    //   query.type = String(filterCriteria.type);
    // }

    // if (filterCriteria.sex) {
    //   query.sex = String(filterCriteria.sex);
    // }

    // console.log(queryString.stringify(query));

    history.push({
      pathname: "/profile",
      search: `?page=${currentPage}&type=${type}&sex=${sex}`,
      // search: queryString.stringify(query),
    });

    dispatch(getAnimals(currentPage, pageSize, type, sex));
  }, [dispatch, filterCriteria]);

  return (
    <Container>
      <Title color={colors.primary} textAlign="center">
        Animals
      </Title>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Filter
            currentPage={currentPage}
            pageSize={pageSize}
            onFiltersSubmit={onFiltersSubmit}
            initialValues={{ type, sex }}
          />
          <Btn onClick={onClear}>clear the filter</Btn>
          <List>
            <Pagination
              showQuickJumper
              onChange={onPageChange}
              defaultCurrent={1}
              current={currentPage}
              total={animals.count}
            />
          </List>
          <List>
            {animals.length !== 0 ? (
              animals.animals.map((animal) => (
                <AnimalItem key={animal._id} animal={animal} />
              ))
            ) : (
              <p>Animals not found. Please, Try to refine your criteria</p>
            )}
          </List>
        </>
      )}
    </Container>
  );
};

export default Animals;
