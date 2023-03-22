import EmployeesTable from "../_components/employeesTable";
import SearchBar from "../_components/searchBar";
import Pagination from "../_components/pagination";
import NumberOfEntries from "../_components/numberEntries";
import { Link } from "react-router-dom";
import "../styles/employeesList.scss";

export default function EmployeesDataTable() {
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
