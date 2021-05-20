import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as queryString from "querystring";
import Filter from "../../../components/shared/filter/Filter";
import AnimalCard from "./AnimalCard";
import { Pagination } from "antd";
import { getAnimals } from "../../../redux/thunks/animal";
import {
  Container,
  List,
  Title,
  Btn,
  SubTitle
} from "../../../components/shared/styles/layout";
import InfoNotFound from "../../../components/shared/notFound/InfoNotFound";

import Spinner from "../../../components/shared/spinner/Spinner";
import { colors } from "../../../components/shared/styles/global";

const AnimalList = () => {
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

    let filter = {};

    if( parsed.page ) filter.currentPage = Number(parsed.page);
    if( parsed.type ) filter.type = parsed.type;
    if( parsed.sex ) filter.sex = parsed.sex;

    setFilterCriteria({
      ...filterCriteria,
      ...filter
    });
  }, []);

  useEffect(() => {
    const query = {};

    if (filterCriteria.currentPage !== 1) {
      query.page = String(filterCriteria.currentPage);
    }

    if (filterCriteria.type) {
      query.type = String(filterCriteria.type);
    }

    if (filterCriteria.sex) {
      query.sex = String(filterCriteria.sex);
    }

    history.push({
      pathname: "/animal",
      // search: `?page=${currentPage}&type=${type}&sex=${sex}`,
      search: queryString.stringify(query),
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
      ) :
      (
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
            
            { animals.length !== 0 ? (animals.animals.map((animal) => (
              <AnimalCard key={animal._id} animal={animal} filterCriteria={filterCriteria}/>
            ))) : <SubTitle color={colors.primary}>Animals not found. Please, Try to refine your criteria</SubTitle>}
          </List>
        </>
      )}
    </Container>
  );
};

export default AnimalList;
