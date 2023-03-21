import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/pagination.scss";

export default function Pagination() {
  const { employees, filteredEmployees, entries } = useSelector(
    (state) => state.employee
  );

  const [employeesList, setEmployeesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesByPage] = useState(3);

  useEffect(() => {
    setEmployeesList(filteredEmployees.length ? filteredEmployees : employees);
  }, [employees, filteredEmployees]);

  const lastIndex = currentPage * entriesByPage;
  const firstIndex = lastIndex - entriesByPage;
  const currentEntries = employeesList.slice(firstIndex, lastIndex);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(employeesList.length / entriesByPage); i++) {
    pageNumbers.push(i);
  }

const paginate = (pageNumber) => {
  setCurrentPage(pageNumber)
}


  return (
    <section className="pagination-container">
      <button>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </button>

      <div>
        <ul className="pagination-container pagination-container--pagination">
          {pageNumbers.map((number) => {
            return (
              <li
                key={number}
                onClick= {() => paginate(number)}
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
