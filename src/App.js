import {Route, Routes} from "react-router-dom"

import Header from "./components/header";
import AddNewEmployee from "./screens/addNewEmployee";
import EmployeeList from "./screens/employeeList";
import "./styles/app.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<AddNewEmployee/>}/>
        <Route path="/employee-list" element={<EmployeeList/>} />
      </Routes>

    </div>
  );
}

export default App;