import React from "react";
import { Pagination } from "antd";

import { List } from "../styles/layout";

const PaginationList = ({ count, onPageChange }) => {
  return (
    <List>
      <Pagination
        showQuickJumper
        onChange={onPageChange}
        defaultCurrent={1}
        total={count}
      />
    </List>
  );
};
export default PaginationList;
