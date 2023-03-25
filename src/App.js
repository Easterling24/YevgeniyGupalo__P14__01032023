import {Route, Routes} from "react-router-dom"

import Header from "./_components/header";
import AddNewEmployee from "./_screens/addNewEmployee";
import EmployeesDataTable from "./_screens/employeeList";
import { loadEmployees } from "./reducers/employeeReducer";
import {useDispatch } from "react-redux";
import { useEffect } from "react";
import "./styles/app.scss"

function App() {
  const dispatch = useDispatch()
  
  // Loading initial data from the local storage if some or an empty array to begin with
  useEffect(() => {
    dispatch(loadEmployees())
  }, [dispatch])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<AddNewEmployee/>}/>
        <Route path="/employee-list" element={<EmployeesDataTable/>} />
      </Routes>

    </div>
  );
}

export default App;