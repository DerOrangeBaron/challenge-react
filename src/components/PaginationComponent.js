import React from "react";
import { Pagination } from "react-bootstrap";
import { selectPage, getCharacters } from "../reducers/characterSlice";
import { useDispatch, useSelector } from "react-redux";

function PaginationComponent({ character }) {
  const pageInfo = useSelector(selectPage);

  const dispatch = useDispatch();
  const handlePageChange = (page) => {
    dispatch(getCharacters(page));
  };

  return (
    <div className="flex-center mt-3">
      <Pagination size="lg">
        <Pagination.First
          disabled={pageInfo.actualPage === 1}
          onClick={() => handlePageChange(1)}
        />
        <Pagination.Prev
          disabled={pageInfo.actualPage === 1}
          onClick={() => handlePageChange(pageInfo.actualPage - 1)}
        />

        <Pagination.Item active>{pageInfo.actualPage}</Pagination.Item>

        <Pagination.Next
          disabled={pageInfo.actualPage === pageInfo.pages}
          onClick={() => handlePageChange(pageInfo.actualPage + 1)}
        />
        <Pagination.Last
          disabled={pageInfo.actualPage === pageInfo.pages}
          onClick={() => handlePageChange(pageInfo.pages)}
        />
      </Pagination>
    </div>
  );
}

export default PaginationComponent;
