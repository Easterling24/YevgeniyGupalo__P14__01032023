import { createSlice } from "@reduxjs/toolkit";
import { mockedEmployees } from "../mockedData/employees";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    // employees: localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) :[],
    employees: mockedEmployees,
    currentEmployees: [],
    filteredEmployees: [],
    currentFilteredEmployees: [],
    appliedFilters: [],
    entries: 10,
    currentPage: 1,
    filterMode: false,
    paginatedEmployees: [],
    filteredListTotal: [],
  },
  reducers: {
    loadEmployees: (state) => {
      state.currentPage = 1;
      state.filterMode = false;
      state.appliedFilters = [];
      state.currentFilteredEmployees = state.employees;
      state.filteredEmployees = state.employees;
      let entries = state.entries;
      state.currentCount = entries;
      let totalPages = Math.ceil(state.filteredEmployees.length / entries);
      state.totalPages = totalPages;
      let currentEmployees = state.filteredEmployees.slice(0, entries);
      state.filteredEmployees = currentEmployees;
    },

    addNewEmployee: (state, action) => {
      const newEmployee = action.payload;

      let newEmployees = [...state.employees, newEmployee];
      state.employees = newEmployees;
    },

    filterEmployee: (state, action) => {
      const value = action.payload.value;

      let appliedFilters = state.appliedFilters;
      let filteredValues = state.employees.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(value.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(value.toLowerCase()) ||
          employee.department.toLowerCase().includes(value.toLowerCase()) ||
          employee.city.toLowerCase().includes(value.toLowerCase()) ||
          employee.state.toLowerCase().includes(value.toLowerCase()) ||
          employee.street.toLowerCase().includes(value.toLowerCase())
      );

      const actionType = action.type;

      if (value) {
        let index = appliedFilters.indexOf(actionType);
        if (index === -1) appliedFilters.push(actionType);
        state.filteredListTotal = filteredValues;
        let entries = state.entries;
        let totalPages = Math.ceil(state.filteredListTotal.length / entries);
        let currentEmployees = state.filteredListTotal.slice(0, entries);
        state.filteredEmployees = currentEmployees;
        state.totalPages = totalPages;
        state.currentPage = 1;
        state.currentCount = 10;
      } else {
        let index = appliedFilters.indexOf(actionType);
        appliedFilters.splice(index, 1);
        if (appliedFilters.length === 0) {
          state.filteredListTotal = [];
          state.filteredEmployees = state.employees;
          state.currentPage = 1;
          state.currentCount = 10;

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
      const page = action.payload.page;
      let entries = state.entries;
      state.currentPage += page;
      let nextEmployees;

      if (state.filteredListTotal.length) {
        if (page === 1) {
          let upperCount = state.currentCount + entries;
          let lowerCount = state.currentCount;
          state.currentCount += entries;

          let nextEmployees = state.employees.slice(lowerCount, upperCount);
          state.filteredEmployees = nextEmployees;
        }

        if (page === -1) {
          let upperCount = state.currentCount;
          let lowerCount = state.currentCount - entries;
          state.currentCount = lowerCount;

          nextEmployees = state.employees.slice(
            lowerCount - entries,
            upperCount - entries
          );

          state.filteredEmployees = nextEmployees;
        }
      } else {
        if (page === 1) {
          let upperCount = state.currentCount + entries;
          let lowerCount = state.currentCount;

          state.currentCount += entries;

          state.filteredEmployees = state.employees;

          nextEmployees = state.filteredEmployees.slice(lowerCount, upperCount);

          state.filteredEmployees = nextEmployees;
        }

        if (page === -1) {
          let upperCount = state.currentCount;
          let lowerCount = state.currentCount - entries;
          state.currentCount = lowerCount;

          state.filteredEmployees = state.employees;

          nextEmployees = state.filteredEmployees.slice(
            lowerCount - entries,
            upperCount - entries
          );

          state.filteredEmployees = nextEmployees;
        }
      }
    },

    loadExactPage: (state, action) => {
      const exactPage = action.payload;
      let entries = state.entries;

      let upperCountExact = entries * exactPage;
      let lowerCountExact = upperCountExact - entries;

      let exactEmployeeSet = state.employees.slice(
        lowerCountExact,
        upperCountExact
      );
      state.currentPage = exactPage;
      state.currentCount = upperCountExact;

      state.filteredEmployees = exactEmployeeSet;
  
    },

    changeEntry: (state, action) => {
      const entryValue = action.payload.value;

      if (state.filterMode && state.filteredListTotal.length) {
        state.filteredEmployees = state.filteredListTotal;
        state.entries = entryValue;
        let entries = state.entries;
        state.currentCount = entries;
        let totalPages = Math.ceil(state.filteredEmployees.length / entries);
        state.totalPages = totalPages;
        let currentEmployees = state.filteredEmployees.slice(0, entries);
        state.filteredEmployees = currentEmployees;
      } else {
        state.filteredEmployees = state.employees;
        state.entries = entryValue;
        let entries = state.entries;
        state.currentCount = entries;
        let totalPages = Math.ceil(state.filteredEmployees.length / entries);
        state.totalPages = totalPages;
        let currentEmployees = state.filteredEmployees.slice(0, entries);
        state.filteredEmployees = currentEmployees;
        state.currentPage = 1;
      }
    },

    // Sorting reducers start
    // ======================================================================================
    sortByFirstName: (state, action) => {
      const sortByFirstNameArr =
        action.payload.direction === "asc"
          ? sortAsc(state.employees, "firstName")
          : sortDesc(state.employees, "firstName");
      state.employees = sortByFirstNameArr;
      state.filteredEmployees = state.employees;
    },
    sortByLastName: (state, action) => {
      const sortByFirstNameArr =
        action.payload.direction === "asc"
          ? sortAsc(state.employees, "lastName")
          : sortDesc(state.employees, "lastName");
      state.employees = sortByFirstNameArr;
      state.filteredEmployees = state.employees;
    },
    sortByStartDate: (state, action) => {
      const sortByFirstNameArr =
        action.payload.direction === "asc"
          ? sortDateAsc(state.employees, "startDate")
          : sortDateDesc(state.employees, "startDate");
      state.employees = sortByFirstNameArr;
      state.filteredEmployees = state.employees;
    },
    sortByBirthDate: (state, action) => {
      const sortByFirstNameArr =
        action.payload.direction === "asc"
          ? sortDateAsc(state.employees, "birthDate")
          : sortDateDesc(state.employees, "birthDate");
      state.employees = sortByFirstNameArr;
      state.filteredEmployees = state.employees;
    },
    sortByStreet: (state, action) => {
      const sortByFirstNameArr =
        action.payload.direction === "asc"
          ? sortAddressAsc(state.employees, "street")
          : sortAddressDesc(state.employees, "street");

      state.employees = sortByFirstNameArr;
      state.filteredEmployees = state.employees;
    },
    sortByCity: (state, action) => {
      const sortByFirstNameArr =
        action.payload.direction === "asc"
          ? sortAsc(state.employees, "city")
          : sortDesc(state.employees, "city");
      state.employees = sortByFirstNameArr;
      state.filteredEmployees = state.employees;
    },
    sortByDepartment: (state, action) => {
      const sortByFirstNameArr =
        action.payload.direction === "asc"
          ? sortAsc(state.employees, "department")
          : sortDesc(state.employees, "department");
      state.employees = sortByFirstNameArr;
      state.filteredEmployees = state.employees;
    },
    sortByState: (state, action) => {
      const sortByFirstNameArr =
        action.payload.direction === "asc"
          ? sortAsc(state.employees, "state")
          : sortDesc(state.employees, "state");
      state.employees = sortByFirstNameArr;
      state.filteredEmployees = state.employees;
    },
    sortByZipCode: (state, action) => {
      const sortByFirstNameArr =
        action.payload.direction === "asc"
          ? sortAscNums(state.employees, "zipCode")
          : sortDescNums(state.employees, "zipCode");
      state.employees = sortByFirstNameArr;
      state.filteredEmployees = state.employees;
    },
  },
});

// Sorting reducers end
// ======================================================================================
export const employeeReducer = employeeSlice.reducer;

export const {
  loadEmployees,
  addNewEmployee,
  filterEmployee,
  loadNewPage,
  loadExactPage,
  changeEntry,
  getLocalStorage,
  sortByFirstName,
  sortByLastName,
  sortByBirthDate,
  sortByStartDate,
  sortByCity,
  sortByState,
  sortByZipCode,
  sortByStreet,
  sortByDepartment,
} = employeeSlice.actions;

// Helper functions start
// ===================================================

function sortAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return 1;

    if (b[field] > a[field]) return -1;

    return 0;
  });
}

function sortDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return -1;

    if (b[field] > a[field]) return 1;

    return 0;
  });
}
function sortAscNums(arr, field) {
  return arr.sort(function (a, b) {
    if (parseInt(a[field]) > parseInt(b[field])) return -1;

    if (parseInt(b[field]) > parseInt(a[field])) return 1;

    return 0;
  });
}

function sortDescNums(arr, field) {
  return arr.sort(function (a, b) {
    if (parseInt(a[field]) > parseInt(b[field])) return 1;

    if (parseInt(b[field]) > parseInt(a[field])) return -1;

    return 0;
  });
}
function sortDateAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (new Date(a[field]) > new Date(b[field])) return -1;

    if (new Date(b[field]) > new Date(a[field])) return 1;

    return 0;
  });
}

function sortDateDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (new Date(a[field]) > new Date(b[field])) return 1;

    if (new Date(b[field]) > new Date(a[field])) return -1;

    return 0;
  });
}

function sortAddressAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field].replace(/[0-9]/g, "") > b[field].replace(/[0-9]/g, ""))
      return 1;

    if (b[field].replace(/[0-9]/g, "") > a[field].replace(/[0-9]/g, ""))
      return -1;

    return 0;
  });
}

function sortAddressDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field].replace(/[0-9]/g, "") > b[field].replace(/[0-9]/g, ""))
      return -1;

    if (b[field].replace(/[0-9]/g, "") > a[field].replace(/[0-9]/g, ""))
      return 1;

    return 0;
  });
}

// Helper functions end
// ===================================================
