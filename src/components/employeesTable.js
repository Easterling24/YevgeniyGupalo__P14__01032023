import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { sortByFirstName, loadEmployees } from "../reducers/employeeReducer";
import { useDispatch } from "react-redux";
import "../styles/dataTable.scss";

export default function EmployeesTable() {
  // Extracting the employee data from state
  const { filteredEmployees } = useSelector((state) => state.employee);
  const dispatch = useDispatch()


  const sortByFirstName = (e) => {
    e.stopPropagation()
    const value = e.target.value
    let direction = value.endsWith('asc') ? "asc" : "desc";
    dispatch(sortByFirstName({direction}))
    dispatch(loadEmployees())
  }
  const sortByLasttName = (e) => {
    e.stopPropagation()
    const value = e.target.value
    let direction = value.endsWith('asc') ? "asc" : "desc";
    dispatch(sortByFirstName({direction}))
    dispatch(loadEmployees())
  }
  const sortByBirthDate = (e) => {
    e.stopPropagation()
    const value = e.target.value
    let direction = value.endsWith('asc') ? "asc" : "desc";
    dispatch(sortByFirstName({direction}))
    dispatch(loadEmployees())
  }
  const sortByStarthDate = (e) => {
    e.stopPropagation()
    const value = e.target.value
    let direction = value.endsWith('asc') ? "asc" : "desc";
    dispatch(sortByFirstName({direction}))
    dispatch(loadEmployees())
  }
  const sortByStreet = (e) => {
    e.stopPropagation()
    const value = e.target.value
    let direction = value.endsWith('asc') ? "asc" : "desc";
    dispatch(sortByFirstName({direction}))
    dispatch(loadEmployees())
  }
  const sortByCity = (e) => {
    e.stopPropagation()
    const value = e.target.value
    let direction = value.endsWith('asc') ? "asc" : "desc";
    dispatch(sortByFirstName({direction}))
    dispatch(loadEmployees())
  }
  const sortByZipCode = (e) => {
    e.stopPropagation()
    const value = e.target.value
    let direction = value.endsWith('asc') ? "asc" : "desc";
    dispatch(sortByFirstName({direction}))
    dispatch(loadEmployees())
  }
  const sortByDepartment = (e) => {
    e.stopPropagation()
    const value = e.target.value
    let direction = value.endsWith('asc') ? "asc" : "desc";
    dispatch(sortByFirstName({direction}))
    dispatch(loadEmployees())
  }

  return (
    <section className="table-wrapper">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col">
              <span>First Name</span>{" "}
              <div className="icon-container">
                {" "}
                <button onClick={(e) => sortByFirstName(e)} value="alphabet_asc">
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button  onClick={(e) => sortByFirstName(e)} value="alphabet_desc">
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Last Name</span>{" "}
              <div className="icon-container">
                {" "}
                <button>
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}  
                <button>
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Birth Date</span>{" "}
              <div className="icon-container">
                {" "}
                <button>
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button>
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Street</span>{" "}
              <div className="icon-container">
                {" "}
                <button>
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button>
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Start Date</span>{" "}
              <div className="icon-container">
                {" "}
                <button>
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button>
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>City</span>{" "}
              <div className="icon-container">
                {" "}
                <button>
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button>
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>State</span>{" "}
              <div className="icon-container">
                {" "}
                <button>
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button>
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Zip Code</span>{" "}
              <div className="icon-container">
                {" "}
                <button>
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button>
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
            <th scope="col">
              <span>Department</span>{" "}
              <div className="icon-container">
                {" "}
                <button>
                  <FontAwesomeIcon icon={faSortUp} />
                </button>{" "}
                <button>
                  <FontAwesomeIcon icon={faSortDown} />
                </button>{" "}
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees ? (
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
            <tr>Nothing here</tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
