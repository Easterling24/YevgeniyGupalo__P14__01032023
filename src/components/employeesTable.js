import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import {
  sortByFirstName,
  sortByLastName,
  sortByDepartment,
  sortByZipCode,
  sortByStartDate,
  sortByBirthDate,
  sortByState,
  sortByStreet,
  sortByCity,
  loadEmployees,
} from "../reducers/employeeReducer";
import { useDispatch } from "react-redux";
import "../styles/dataTable.scss";

export default function EmployeesTable() {
  // Extracting the employee data from state

  const { filteredEmployees } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  // Sorting functions with dispatch start

  // ======================================================
  const sortFirstName = (e) => {
    const value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    dispatch(sortByFirstName({ direction }));
    dispatch(loadEmployees());
  };

  const sortLastName = (e) => {
    const value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    dispatch(sortByLastName({ direction }));
    dispatch(loadEmployees());
  };

  const sortDepartment = (e) => {
    const value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    dispatch(sortByDepartment({ direction }));
    dispatch(loadEmployees());
  };
  const sortState = (e) => {
    const value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    dispatch(sortByState({ direction }));
    dispatch(loadEmployees());
  };
  const sortCity = (e) => {
    const value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    dispatch(sortByCity({ direction }));
    dispatch(loadEmployees());
  };
  const sortZipCode = (e) => {
    const value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    dispatch(sortByZipCode({ direction }));
    dispatch(loadEmployees());
  };
  const sortStartDate = (e) => {
    const value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    dispatch(sortByStartDate({ direction }));
    dispatch(loadEmployees());
  };

  const sortBirthDate = (e) => {
    const value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "desc";
    dispatch(sortByBirthDate({ direction }));
    dispatch(loadEmployees());
  };

  const sortStreet = (e) => {
    const value = e.target.value;

    let direction = value.endsWith("asc") ? "asc" : "desc";
    dispatch(sortByStreet({ direction }));
    dispatch(loadEmployees());
  };

  // Sorting functions with dispatch end
  // ======================================================

  return (
    <section className="table-wrapper">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col">
              <span>First Name</span>{" "}
              <div className="icon-container">
                {" "}
                <button onClick={(e) => sortFirstName(e)} value="alphabet_asc">
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button onClick={(e) => sortFirstName(e)} value="alphabet_desc">
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Last Name</span>{" "}
              <div className="icon-container">
                {" "}
                <button onClick={(e) => sortLastName(e)} value="alphabet_asc">
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button onClick={(e) => sortLastName(e)} value="alphabet_desc">
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Birth Date</span>{" "}
              <div className="icon-container">
                {" "}
                <button onClick={(e) => sortBirthDate(e)} value="alphabet_asc">
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button onClick={(e) => sortBirthDate(e)} value="alphabet_desc">
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Street</span>{" "}
              <div className="icon-container">
                {" "}
                <button onClick={(e) => sortStreet(e)} value="alphabet_asc">
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button onClick={(e) => sortStreet(e)} value="alphabet_desc">
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Start Date</span>{" "}
              <div className="icon-container">
                {" "}
                <button onClick={(e) => sortStartDate(e)} value="alphabet_asc">
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button onClick={(e) => sortStartDate(e)} value="alphabet_desc">
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>City</span>{" "}
              <div className="icon-container">
                {" "}
                <button onClick={(e) => sortCity(e)} value="alphabet_asc">
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button onClick={(e) => sortCity(e)} value="alphabet_desc">
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>State</span>{" "}
              <div className="icon-container">
                {" "}
                <button onClick={(e) => sortState(e)} value="alphabet_asc">
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button onClick={(e) => sortState(e)} value="alphabet_desc">
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Zip Code</span>{" "}
              <div className="icon-container">
                {" "}
                <button onClick={(e) => sortZipCode(e)} value="alphabet_asc">
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button onClick={(e) => sortZipCode(e)} value="alphabet_desc">
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Department</span>{" "}
              <div className="icon-container">
                {" "}
                <button onClick={(e) => sortDepartment(e)} value="alphabet_asc">
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button
                  onClick={(e) => sortDepartment(e)}
                  value="alphabet_desc"
                >
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length ? (
            filteredEmployees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{format(new Date(employee.birthDate), "dd/MM/yyyy")}</td>
                  <td>{employee.street}</td>
                  <td>{format(new Date(employee.startDate), "dd/MM/yyyy")}</td>
                  <td>{employee.city}</td>
                  <td>{employee.state}</td>
                  <td>{employee.zipCode}</td>
                  <td>{employee.department}</td>
                </tr>
              );
            })
          ) : (
            <tr style={{width:"100%", textAlign:"center"}}>Nothing here</tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
