import React from "react";
import { useSelector } from "react-redux";

export default function EmployeesTable() {
  const { employees, filteredEmployees } = useSelector(
    (state) => state.employee
  );

  console.log(filteredEmployees);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
          >
            First Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
          >
            Last Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
          >
            Start Date
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
          >
            Department
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
          >
            Date of Birth
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
          >
            Street
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
          >
            City
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
          >
            State
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
          >
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
  );
}
