import { configureStore } from '@reduxjs/toolkit';
import {employeeReducer} from './reducers/employeeReducer';

const persistedState = localStorage.getItem('employees')
						? localStorage.getItem('employees')
						: []

const store = configureStore({
	reducer: {
		employee:employeeReducer,

	},
	persistedState
});

export default store;
