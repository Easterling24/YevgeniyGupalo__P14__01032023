
import EmployeesTable from "../_components/employeesTable";
import SearchBar from "../_components/searchBar";
import NumberOfEntries from "../_components/numberEntries";
import { Link } from "react-router-dom";
import "../styles/employeesList.scss";

export default function EmployeesDataTable() {

  return (
    <section className="employee-list-wrapper">
      <h1>Your Employees</h1>
      <Link to="/"> Back</Link>

      <div className="top-wrapper">
        <NumberOfEntries/>
        <SearchBar />
      </div>
      <EmployeesTable />
    </section>
  );
}
