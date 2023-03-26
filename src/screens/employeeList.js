import EmployeesTable from "../components/employeesTable";
import SearchBar from "../components/searchBar";
import Pagination from "../components/pagination";
import NumberOfEntries from "../components/numberEntries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/employeesList.scss";

export default function EmployeesDataTable() {

  return (
    <main className="employee-list-wrapper">
      <h1>Current employees</h1>
      <Link to="/"><FontAwesomeIcon icon={faHouseUser}/></Link>
      {/* <Link to="/">back</Link> */}

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
