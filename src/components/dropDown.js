import data from "../data/states.json";
import { useState } from "react";
import "../styles/dropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function DropDown(props) {
  const [dropDownOpen, setDropDrownOpen] = useState(false);

  const { value, setValue, arr } = props;

  const handleDropdown = () => {
    if (dropDownOpen) {
      setDropDrownOpen(false);
    } else {
      setDropDrownOpen(true);
    }
  };

  const changeSelection = (e) => {
    const selected = e;

    setValue(selected);
    setDropDrownOpen(false);
  };

  return (
    <div className="dropdown__wrapper">
      <div className="dropdown__wrapper dropdown__wrapper--header ">
        <span>{value}</span>

        <button type="button" onClick={handleDropdown}>
          <FontAwesomeIcon icon={dropDownOpen ? faCaretUp : faCaretDown} />
        </button>
      </div>

      {dropDownOpen && (
        <div className="dropdown__wrapper dropdown__wrapper--drop_container">
          <ul>
            {arr.map((elt) => {
              return (
                <li
                  key={elt}
                  onClick={(e) => changeSelection(e.target.textContent)}
                >
                  {elt}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
