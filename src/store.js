import { configureStore, get } from "@reduxjs/toolkit";
import { employeeReducer } from "./reducers/employeeReducer";


const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
