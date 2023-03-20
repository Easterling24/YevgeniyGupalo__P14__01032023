import React from "react";
import { useSelector } from "react-redux";
import "../styles/dataTable.scss";

export default function EmployeesTable() {
  const { filteredEmployees } = useSelector((state) => state.employee);

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
          <th scope="col">
            Zip Code
          </th>
        </tr>
      </thead>

      <tbody>
        {filteredEmployees.map((employee, index) => {
          return (
            <tr key={index}>
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
        })}
      </tbody>
    </table>
    </section>
  );
}
