import { configureStore, get } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { employeeReducer } from "./reducers/employeeReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
