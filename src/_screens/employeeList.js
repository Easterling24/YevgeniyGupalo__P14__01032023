import EmployeesTable from "../_components/employeesTable";
import SearchBar from "../_components/searchBar";
import Pagination from "../_components/pagination";
import NumberOfEntries from "../_components/numberEntries";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadEmployees } from "../reducers/employeeReducer";
import "../styles/employeesList.scss";

export default function EmployeesDataTable() {
  const dispatch = useDispatch();

  // Loading the initial data from local Storage or an empty array
  // useEffect(() => {
  //   dispatch(loadEmployees());
  // }, [dispatch]);
  return (
    <main className="employee-list-wrapper">
      <h1>Your Employees</h1>
      <Link to="/"> Back</Link>

      <section className=" employee-list-wrapper employee-list-wrapper--top">
        <NumberOfEntries />
        <SearchBar />
      </section>
      <EmployeesTable />

      <section className="employee-list-wrapper employee-list-wrapper--bot">
        <Pagination />
      </section>
    </main>
  );
}
