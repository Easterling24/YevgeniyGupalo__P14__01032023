import {Route, Routes} from "react-router-dom"

import Header from "./_components/header";
import AddNewEmployee from "./_screens/addNewEmployee";
import EmployeesDataTable from "./_screens/_employeeList";

import "./styles/app.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<AddNewEmployee/>} />
        <Route path="/employee-list" element={<EmployeesDataTable/>} />
      </Routes>

    </div>
  );
}

export default App;
