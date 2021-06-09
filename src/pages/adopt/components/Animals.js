import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import { ClearOutlined } from "@ant-design/icons";

import { getAnimals } from "../../../redux/thunks/animal";
import { AnimalItem } from "./AnimalItem";
import {
  Container,
  List,
  Title,
  BackgroundFill,
  SubTitle,
  Descriptions,
  DefaultButton,
} from "../../../components/shared/styles/layout";

import AdoptImage from "../../../assets/images/adopt.jpg";
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

    setFilterCriteria((prevState) => ({
      ...prevState,
      ...filter,
    }));
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
      pathname: "/profile",
      // search: `?page=${currentPage}&type=${type}&sex=${sex}`,
      search: queryString.stringify(query),
    });

    dispatch(getAnimals(currentPage, pageSize, type, sex));
  }, [dispatch, filterCriteria]);

  return (
    <>
      <Container>
        <BackgroundFill
          margin="0 0 30px 0"
          alignItems="flex-end"
          justifyContent="flex-start"
          height="400px"
          image={AdoptImage}
          textAlign="initial"
        >
          <Descriptions padding="30px">
            <Title marginBottom="10px" color={colors.white} textAlign="initial">
              Adoption Changes Lives
            </Title>
            <SubTitle weight="500" color={colors.white}>
              Theirs and yours. Find your new best friend here.
            </SubTitle>
          </Descriptions>
        </BackgroundFill>
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
              {animals.length !== 0 ? (
                animals.map((animal) => (
                  <AnimalItem key={animal._id} animal={animal} />
                ))
              ) : (
                <p>Animals not found. Please, Try to refine your criteria</p>
              )}
            </List>
          </>
        )}
      </Container>
    </>
  );
};

export default Animals;
