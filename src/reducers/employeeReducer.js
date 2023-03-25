import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: localStorage.getItem("employees")
      ? JSON.parse(localStorage.getItem("employees"))
      : [],
    currentEmployees: [],
    filteredEmployees: [],
    appliedFilters: [],
    entries: 4,
    currentPage: 1,
    filterMode: false,
    paginatedEmployees: [],
  },
  reducers: {
    loadEmployees: (state, action) => {
      state.filteredEmployees = state.employees;
      let entries = state.entries;
      let totalPages = Math.ceil(state.filteredEmployees.length / entries);
      state.totalPages = totalPages;
      let currentEmployees = state.filteredEmployees.slice(0, entries);
      state.filteredEmployees = currentEmployees;
    },

    addNewEmployee: (state, action) => {
      const newEmployee = action.payload;
      state.employees = [...state.employees, newEmployee];

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
        state.filterMode = true;
        let index = appliedFilters.indexOf(actionType);

        if (index === -1) appliedFilters.push(actionType);
        state.filteredEmployees = filteredValues;

        let employees = state.filteredEmployees;
        let entries = state.entries;
        let totalPages = Math.ceil(employees.length / entries);

        state.totalPages = totalPages;
      } else {
        state.filterMode = false;
        let index = appliedFilters.indexOf(actionType);
        appliedFilters.splice(index, 1);
        if (appliedFilters.length === 0) {
          state.filteredEmployees = state.employees;
          let employees = state.filteredEmployees;
          let entries = state.entries;
          let totalPages = Math.ceil(employees.length / entries);
          state.totalPages = totalPages;
          let currentEmployees = employees.slice(0, entries);
          state.filteredEmployees = currentEmployees;
        }
      }
    },

    loadNewPage: (state, action) => {
      const page = action.payload;

      console.log(page);
    },

    loadExactPage: (state, action) => {
      let entries = state.entries;

      const exactPage = action.payload;
      let upperCountExact = entries * exactPage;
      let lowerCountExact = upperCountExact - entries;

      let exactEmployeeSet = state.employees.slice(
        lowerCountExact,
        upperCountExact
      );
      state.currentPage = exactPage;

      state.filteredEmployees = exactEmployeeSet;
    },

    changeEntry: (state, action) => {
      const entryValue = action.payload
    }
  },
});

export const employeeReducer = employeeSlice.reducer;

export const {
  loadEmployees,
  addNewEmployee,
  filterEmployee,
  loadNewPage,
  loadExactPage,
} = employeeSlice.actions;
