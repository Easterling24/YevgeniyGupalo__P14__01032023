import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { filterEmployee, loadEmployees } from "../reducers/employeeReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/searchBar.scss";

export default function SearchBar() {
  const inputRef = useRef();
  const [searchInput, setSearchInput] = useState(false);
  const dispatch = useDispatch();

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

  const filterEmployees = (input) => {
    dispatch(filterEmployee({ value: input }));

  };

  return (
    <div className="employee-list-wrapper__input">
      <div
        ref={inputRef}
        className=" employee-list-wrapper__input employee-list-wrapper__input--search-container"
      >
        <button
          className={
            searchInput
              ? "employee-list-wrapper__input employee-list-wrapper__input--offscreen"
              : "employee-list-wrapper__input employee-list-wrapper__input--visible"
          }
          onClick={() => {
            setSearchInput(true);
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faSearch} />

          <div className="bar"></div> 
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <input
          type="text"
          onChange={(e) => filterEmployees(e.target.value)}
          placeholder="Fro example, enter a a first name or city.."
          className={
            searchInput
              ? "employee-list-wrapper__input employee-list-wrapper__input--bar-visible"
              : "employee-list-wrapper__input employee-list-wrapper__input--bar-hidden"
          }
        />
      </div>
    </div>
  );
}