import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { searchEmployee } from "../actions/employeeAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/searchBar.scss"

export default function SearchBar() {
  const inputRef = useRef();
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState(false);  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchEmployee(search));
  }, [dispatch, search]);

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
    <div className="employee-list-wrapper__input">

      <div
        ref={inputRef}
        className=" employee-list-wrapper__input employee-list-wrapper__input--search-container"
      >
        <button
          className={searchInput ? "employee-list-wrapper__input employee-list-wrapper__input--offscreen" : "employee-list-wrapper__input employee-list-wrapper__input--visible"}
          onClick={() => {
            setSearchInput(true);
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faSearch} />
        </button>


        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={searchInput ? "employee-list-wrapper__input employee-list-wrapper__input--bar-visible" : "employee-list-wrapper__input employee-list-wrapper__input--bar-hidden"}
        />



     
      </div>
    </div>
  );
}
