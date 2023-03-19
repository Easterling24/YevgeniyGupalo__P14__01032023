import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmployeesTable from "../_components/employeesTable";
import { searchEmployee } from "../actions/employeeAction";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/employeesList.scss";

export default function EmployeesDataTable() {
  const inputRef = useRef();

  const [searchedItem, setSearchedItem] = useState("");
  const [focusInput, setFocusInput] = useState(false);
  const [searchInput, setSearchInput] = useState(false);

  const dispatch = useDispatch()

  
  useEffect(()=>{

      dispatch(searchEmployee(searchedItem))
    
  }, [dispatch, searchedItem])



  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        searchInput &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setSearchInput(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [searchInput]);




  return (
    <section className="employee-list-wrapper">
      <h1>Your Employees</h1>

      <div className="employee-list-wrapper__input">
        <div className=" employee-list-wrapper__input employee-list-wrapper__input--item-entry"></div>
        <div
          ref={inputRef}
          className=" employee-list-wrapper__input employee-list-wrapper__input--search-container"
        >
          <button
            className={searchInput ? "offscreen" : "visible"}
            onClick={() => {
              setSearchInput(true);
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <input type="text" value={searchedItem} onChange={(e) => setSearchedItem(e.target.value)}  className={searchInput ? "input-visible" : "input-hidden"}/>
        </div>
      </div>
      <div className="employee-list-wrapper__table-wrapper">
        <EmployeesTable />
      </div>
    </section>
  );
}
