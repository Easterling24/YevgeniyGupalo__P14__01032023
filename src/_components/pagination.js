import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { paginateData } from "../reducers/employeeReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/pagination.scss";

export default function Pagination() {
  const dispatch = useDispatch();
  const { employees, filteredEmployees, entries, numberOfPages } = useSelector(
    (state) => state.employee
  );

  const paginate = (pageNumber) => {
    dispatch(paginateData(pageNumber));
  };

  return (
    <section className="pagination-container">
      <button>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </button>

      <div>
        <ul className="pagination-container pagination-container--pagination">
          {numberOfPages.map((number) => {
            return (
              <li
                key={number}
                onClick={() => paginate(number)}
                className={
                  "pagination-container pagination-container--page_number"
                }
              >
                {number}
              </li>
            );
          })}
        </ul>
      </div>

      <button>
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </button>
    </section>
  );
}
