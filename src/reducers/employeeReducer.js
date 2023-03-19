import {
  ADD_NEW_EMPLOYEE_SUCCESS,
  ADD_NEW_EMPLOYEE_FAIL,
  ADD_NEW_EMPLOYEE_PENDING,
  SEARCH_EMPLOYEE_SUCCESS,
  SEARCH_EMPLOYEE_PENDING,
  SEARCH_EMPLOYEE_FAIL,
} from "../constants/employeeConstants";

const initialState = {


  employees: localStorage.getItem("employees")
    ? JSON.parse(localStorage.getItem("employees"))
    : [],
    value :"",
  filteredEmployees: [],
  setLoading: false,
  error: false,
};

console.log(initialState.employees);

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
    //   let newState = Object.assign({}, state);

      let value = payload.query;

      const filteredEmployees = state.employees.filter((employee) =>
        employee.firstName.toLowerCase().includes(value.toLowerCase())
      )



      return {

        ...state, 
        value, 
        filteredEmployees,
        setLoading:false
      }
    //   let filteredValues = state.employees.filter((employee) =>
    //   employee.firstName.toLowerCase().includes(value.toLowerCase())
    // )


    // return {
    //   ...state,
    //   employees : value === ""? state.employees : state.employees.filter((employee) =>
    //   employee.firstName.toLowerCase().includes(value.toLowerCase())
    // ),
    // setLoading:false
    // }



    //   let initialEmployee = state.employees
;

    // let filters = state.filters

    // if(value){

    //   console.log("we have sometging")
      
    //   state.employees = filteredValues





    // } else if(!value){
    //   console.log("we have nothing")

    //   state.employees = initialEmployee



    // }


    // return {
    //   ...state, 
    //   employees: state.employees,
    //   setLoading:false
    // }
   




      
      // let appliedFilters = state.appliedFilters;

      // if (value) {
      //   let index = appliedFilters.indexOf(SEARCH_EMPLOYEE_SUCCESS);

      //   if (index === -1) {
      //     appliedFilters.push(SEARCH_EMPLOYEE_SUCCESS);

      //     newState.filteredEmployees = filteredValues;
      //   }
      // } else {
      //   let index = appliedFilters.indexOf(SEARCH_EMPLOYEE_SUCCESS);
      //   appliedFilters.splice(index, 1);

      //   if (appliedFilters.length === 0) {
      //     newState.filteredEmployees = newState.employees;
      //   }
      // }

      // return newState;



    default:
      return state;
  }
}
