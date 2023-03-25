import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadEmployees } from "../reducers/employeeReducer";
import "../styles/dataTable.scss";

export default function EmployeesTable() {
  // Extracting the employee data from state
  const { filteredEmployees } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  console.log(filteredEmployees)




  return (
    <section className="table-wrapper">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">Department</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Street</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip Code</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees ? (
            filteredEmployees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.startDate}</td>
                  <td>{employee.department}</td>
                  <td>{employee.dob}</td>
                  <td>{employee.street}</td>
                  <td>{employee.city}</td>
                  <td>{employee.state}</td>
                  <td>{employee.zipCode}</td>
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
