import React from "react";

import { Pagination } from 'antd';

import { useDispatch } from "react-redux";
import { getAnimals} from "../../../redux/thunks/animal";
import { List } from "../styles/layout";

const Paginations = ({ count }) => {
  const dispatch = useDispatch();

  const pageSize = 10;
  const onPageChange = (pageNumber) => {
    dispatch(getAnimals(pageNumber, pageSize=10));
    // dispatch(setCurrentPage(pageNumber));
  };

  return (
    <List>
      <Pagination showQuickJumper onChange={onPageChange} defaultCurrent={1} total={count}/>
    </List>
  );
};
export default Paginations;
