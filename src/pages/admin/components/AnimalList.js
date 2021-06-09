import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as queryString from "querystring";
import Filter from "../../../components/shared/filter/Filter";
import AnimalCard from "./AnimalCard";
import { Pagination } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import { getAnimals } from "../../../redux/thunks/animal";
import {
  Container,
  List,
  Title,
  SubTitle,
  DefaultButton,
} from "../../../components/shared/styles/layout";

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
  const { animals, loading, count } = useSelector((state) => state.animal);

  const onPageChange = (page) => {
    setFilterCriteria({ ...filterCriteria, currentPage: page });
  };

  const onClear = () => {
    setFilterCriteria({
      currentPage: 1,
      pageSize: 10,
      sex: "",
      type: "",
    });
  };

  useEffect(() => {
    const { search } = history.location;
    const parsed = queryString.parse(search.substr(1));

    let filter = {};

    if (parsed.page) filter.currentPage = Number(parsed.page);
    if (parsed.type) filter.type = parsed.type;
    if (parsed.sex) filter.sex = parsed.sex;

    setFilterCriteria({
      ...filterCriteria,
      ...filter,
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
      pathname: "/admin/delete",
      // search: `?page=${currentPage}&type=${type}&sex=${sex}`,
      search: queryString.stringify(query),
    });

    dispatch(getAnimals(currentPage, pageSize, type, sex));
  }, [dispatch, filterCriteria]);

  return (
    <Container>
      <Title textAlign="center">Animals</Title>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Filter
            currentPage={currentPage}
            pageSize={pageSize}
            initialValues={{ type, sex }}
            setFilterCriteria={setFilterCriteria}
            filterCriteria={filterCriteria}
          />
          <DefaultButton
            onClick={onClear}
            size="large"
            icon={<ClearOutlined />}
          >
            clear the filter
          </DefaultButton>
          <List>
            <Pagination
              showQuickJumper
              onChange={onPageChange}
              defaultCurrent={1}
              current={currentPage}
              total={count}
            />
          </List>
          <List>
            {animals.length !== 0 && animals ? (
              animals.map((animal) => (
                <AnimalCard
                  key={animal._id}
                  animal={animal}
                  filterCriteria={filterCriteria}
                />
              ))
            ) : (
              <SubTitle color={colors.primary}>
                Animals not found. Please, Try to refine your criteria
              </SubTitle>
            )}
          </List>
        </>
      )}
    </Container>
  );
};

export default AnimalList;
