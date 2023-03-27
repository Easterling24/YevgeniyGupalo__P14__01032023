import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadNewPage, loadExactPage } from "../reducers/employeeReducer";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/pagination.scss";

export default function Pagination() {
  const dispatch = useDispatch();
  const { totalPages, currentPage, employees, entries, filteredEmployees } = useSelector((state) => state.employee);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const lastPage = pages.pop();

  const nextPage = () => {
    dispatch(loadNewPage({ page: 1 }));
  };

  const previousPage = () => {
    dispatch(loadNewPage({ page: -1 }));
  };

  const goToPage = (page) => {
    dispatch(loadExactPage(page));
  };

  return (
    <section className="pagination-container">
      <div className="pagination-container pagination-container--left">
        {filteredEmployees ? (  <div><span>{`Showing 1 to ${entries} of ${employees.length} entries`}</span></div>): (  <div><span>{`Showing 0 to 0 of 0 entries`}</span></div>)}
      
      </div>

      <div className=" pagination-container pagination-container-right">
        {" "}
        <button
          className="pagination-container pagination-container--previous"
          disabled={currentPage === 1}
          onClick={() => previousPage()}
        >
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </button>
        <div className="pagination-container pagination-container--pagination">
          {[...Array(totalPages)].map((value, index) => {
            return (
              <button
                className={`pagination-container ${
                  currentPage === index + 1
                    ? "pagination-container pagination-container--active"
                    : "pagination-container pagination-container--item"
                }`}
                key={index}
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <button
          className="pagination-container pagination-container--next"
          disabled={currentPage === lastPage}
          onClick={() => nextPage()}
        >
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </button>
      </div>
    </section>
  );
}
