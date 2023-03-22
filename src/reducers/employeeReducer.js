import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    filteredEmployees: [],
    currentEmployees: [],
    appliedFilters: [],
    entries: 2,
    currentPage: 1,
    numberOfPages: [],
  },
  reducers: {
    loadEmployees: (state, action) => {
      state.employees = localStorage.getItem("employees")
        ? JSON.parse(localStorage.getItem("employees"))
        : [];

        state.filteredEmployees = state.employees
    },

    addNewEmployee: (state, action) => {
      const newEmployee = action.payload;
      state.employees.push(newEmployee);
      localStorage.setItem("employees", JSON.stringify(state.employees));
    },

    filterEmployee: (state, action) => {
      const value = action.payload.value;

      let appliedFilters = state.appliedFilters;
      let filteredValues = state.employees.filter((employee) =>
        employee.firstName.toLowerCase().includes(value.toLowerCase())
      );

      const actionType = action.type;

      if (value) {
        let index = appliedFilters.indexOf(actionType);

        if (index === -1) appliedFilters.push(actionType);
        state.filteredEmployees = filteredValues;
      } else {
        let index = appliedFilters.indexOf(actionType);
        appliedFilters.splice(index, 1);
        if (appliedFilters.length === 0) {
          state.filteredEmployees = state.employees;
        }
      }
    },

    // loadPaginatedData: (state, action) => {
    //   let currentEmployeeData = action.payload;
    //   let entries = state.entries;
    //   let currentPage = state.currentPage;
    //   let numberOfPages = state.numberOfPages;

    //   const lastIndex = currentPage * entries;
    //   const firstIndex = lastIndex - entries;

    //   const currentEntries = currentEmployeeData.slice(firstIndex, lastIndex);

    //   console.log(currentEntries)

    //   for (
    //     let i = 1;
    //     i <= Math.ceil(currentEmployeeData.length / entries);
    //     i++
    //   ) {
    //     numberOfPages.push(i);
    //   }

    //   state.currentEmployees = currentEntries;
    // },

    // paginateData :(state, action) => {

    //   const page = action.payload
    //   state.currentPage = page

    // },
  },
});

export const employeeReducer = employeeSlice.reducer;

export const {
  loadEmployees,
  addNewEmployee,
  filterEmployee,
  loadPaginatedData,
  paginateData,
} = employeeSlice.actions;

// import {
//   ADD_NEW_EMPLOYEE_SUCCESS,
//   ADD_NEW_EMPLOYEE_FAIL,
//   ADD_NEW_EMPLOYEE_PENDING,
//   FILTER_EMPLOYEES_BY_VALUES,
//   SEARCH_EMPLOYEE_PENDING,
//   GET_PAGINATED_DATA,
// } from "../constants/employeeConstants";

// const initialState = {
//   employees: localStorage.getItem("employees")
//     ? JSON.parse(localStorage.getItem("employees"))
//     : [],

//   // paginatedList: [],
//   // numberOfPages: [],
//   appliedFilters: [],
//   // entries: 5,
//   // currentPage: 1,
//   // setLoading: false,
//   // error: false,
// };

// export default function employeeReducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     // case GET_PAGINATED_DATA:
//     //   const employeeList = payload;
//     //   const entries = state.entries;
//     //   const currentPage = state.currentPage;
//     //   const numberOfPages = [...state.numberOfPages];

//     //   const lastIndex = currentPage * entries;
//     //   const firstIndex = lastIndex - entries;
//     //   const currentEntries = employeeList.slice(firstIndex, lastIndex);

//     //   for (let i = 1; i <= Math.ceil(employeeList.length / entries); i++) {
//     //     numberOfPages.push(i);
//     //   }

//     //   return {
//     //     ...state,
//     //     paginatedList: currentEntries,
//     //     numberOfPages: numberOfPages,
//     //   };

//     // case ADD_NEW_EMPLOYEE_PENDING:
//     //   return {
//     //     ...state,
//     //     setLoading: true,
//     //   };

//     // case ADD_NEW_EMPLOYEE_FAIL:
//     //   return {
//     //     ...state,
//     //     setLoading: false,
//     //     error: payload,
//     //   };
//     // case ADD_NEW_EMPLOYEE_SUCCESS:
//     //   return {
//     //     ...state,
//     //     employees: [...state.employees, payload],
//     //     setLoading: false,
//     //   };

//     case FILTER_EMPLOYEES_BY_VALUES:
//       let newState = {...state}

//       let value = payload.value;

//       let filteredValues = state.employees.filter((employee) =>
//         employee.firstName.toLowerCase().includes(value.toLowerCase())
//       );

//       let appliedFilters = [...state.appliedFilters];

//       if (value) {
//         let index = appliedFilters.indexOf(FILTER_EMPLOYEES_BY_VALUES);
//         if (index === -1)
//         appliedFilters.push(FILTER_EMPLOYEES_BY_VALUES);

//         console.log(state.appliedFilters)
//         //change the filtered products to reflect the change
//         // newState.filteredProducts = filteredValues;
//       }

//     // } else {
//     //   let index = appliedFilters.indexOf(FILTER_EMPLOYEES_BY_VALUES);
//     //   appliedFilters.splice(index, 1);
//     //   if (appliedFilters.length === 0) {
//     //       //if there are no filters applied, reset the products to normal.
//     //       newState.filteredProducts = newState.employees;
//     //   }
//     // }

//     // if(value){
//     //   let index = appliedFilters.indexOf(FILTER_EMPLOYEES_BY_VALUES);
//     //   if (index===-1)
//     //       //if it doesn’t, add it.
//     //       appliedFilters.push(FILTER_EMPLOYEES_BY_VALUES);
//     //   //change the filtered products to reflect the change
//     //   // newState.filteredEmployees = filteredValues;

//     // }

//     //   return {
//     //     ...state,
//     //     value,
//     //     employees: state.employees.filter((employee) =>
//     //     employee.firstName.toLowerCase().includes(value.toLowerCase())
//     //   ),
//     //     // paginatedList: filteredValues,
//     //     setLoading: false,
//     //   };

//     default:
//       return state;
//   }
// }
