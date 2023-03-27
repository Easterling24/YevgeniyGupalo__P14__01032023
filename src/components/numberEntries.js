import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeEntry, loadEmployees } from "../reducers/employeeReducer";
import "../styles/entries.scss";

export default function NumberOfEntries() {
  const dispatch = useDispatch();
  const { entries } = useSelector((state) => state.employee);
  const [menuOpen, setMenuOpen] = useState(false);
  const entriesList = [ 10, 15, 25, 50, 100];

  const handleDropdown = () => {
    if (menuOpen) {
      console.log("closed");
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
      console.log("open");
    }
  };

  const chnageEntry = (e) => {
    let entry = parseInt(e.target.textContent);
    dispatch(changeEntry({ value: entry }));
    dispatch(loadEmployees())
    setMenuOpen(false)
  };

  return (
    <section className="selector_wrapper">
      <div className="selector_wrapper selector_wrapper--text_container">
        <label htmlFor="select">Show</label>
        <div className="selector_wrapper selector_wrapper--dropdown-container">
          <div
            className="selector_wrapper--dropdown-container selector_wrapper--dropdown-container--header"
            onClick={handleDropdown}
          >
            {entries}
          </div>
          {menuOpen && (
            <div className="selector_wrapper--dropdown-container selector_wrapper--dropdown-container--dropdown">
              <ul>
                {entriesList.map((elt) => {
                  return (
                    <li key={elt} onClick={(e) => chnageEntry(e)}>
                      {elt}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <span htmlFor="entries">entries</span>
      </div>
    </section>
  );
}
