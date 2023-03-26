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
  const { totalPages, currentPage } = useSelector(
    (state) => state.employee
  );



  const nextPage = () => {
    dispatch(loadNewPage({page: 1}))

  }

  const previousPage = () => {
    dispatch(loadNewPage({page: -1}))

  }
  
  const goToPage =(page) => {
    dispatch(loadExactPage(page))

  } 

  return (
    <section className="pagination-container">
      <button>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </button>

     
        <div className="pagination-container pagination-container--pagination">

          {
            [...Array(totalPages)].map((value,index) => {
              return (
                <button className={`pagination-container ${currentPage === index+1 ? "pagination-container pagination-container--active":"pagination-container pagination-container--item" }`} key={index}
                onClick={() => goToPage(index+1)}
                >
                  {index + 1}
                </button>
              )
            })
          }

        </div>
      

      <button>
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </button>
    </section>
  );
}