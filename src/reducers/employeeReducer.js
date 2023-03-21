import {
  ADD_NEW_EMPLOYEE_SUCCESS,
  ADD_NEW_EMPLOYEE_FAIL,
  ADD_NEW_EMPLOYEE_PENDING,
  SEARCH_EMPLOYEE_SUCCESS,
  SEARCH_EMPLOYEE_PENDING,
} from "../constants/employeeConstants";

const initialState = {
  employees: localStorage.getItem("employees") ? JSON.parse(localStorage.getItem("employees")): [],
  value: "",
  filteredEmployees: [],
  entries: 5,
  setLoading: false,
  error: false,
};

export default function employeeReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_NEW_EMPLOYEE_PENDING:
      return {
        ...state,
        setLoading: true,
      };

    case ADD_NEW_EMPLOYEE_FAIL:
      return {
        ...state,
        setLoading: false,
        error: payload,
      };
    case ADD_NEW_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, payload],
        setLoading: false,
      };

    case SEARCH_EMPLOYEE_PENDING:
      return {
        ...state,
        setLoading: true,
      };

    case SEARCH_EMPLOYEE_SUCCESS:
      let value = payload.query;

      const filteredEmployees = state.employees.filter((employee) =>
        employee.firstName.toLowerCase().includes(value.toLowerCase())
      );
      

      return {
        ...state,
        value,
        filteredEmployees,
        setLoading: false,
      };

    default:
      return state;
  }
}
