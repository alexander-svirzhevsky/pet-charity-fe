import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAnimals, setCurrentPage } from "../../../redux/thunks/animal";
import { PageLink, Arrow } from "../styles/pagination/pagination";
import { List } from "../styles/layout";

const Pagination = ({ totalAnimalsCount, pageSize, currentPage }) => {
  const dispatch = useDispatch();

  let pagesCount = Math.ceil(totalAnimalsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionSize = 2;
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  const onPageChange = (pageNumber) => {
    dispatch(getAnimals(pageNumber, pageSize));
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <List>
      {portionNumber > 1 && (
        <Arrow onClick={() => setPortionNumber(portionNumber - 1)}>
          &#129144;
        </Arrow>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <PageLink
              className={currentPage === p && "selectedPage"}
              key={p}
              onClick={() => {
                onPageChange(p);
              }}
            >
              {p}
            </PageLink>
          );
        })}
      {portionCount > portionNumber && (
        <Arrow onClick={() => setPortionNumber(portionNumber + 1)}>
          &#129146;
        </Arrow>
      )}
    </List>
  );
};
export default Pagination;
