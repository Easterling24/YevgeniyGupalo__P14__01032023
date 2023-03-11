import { createSlice } from '@reduxjs/toolkit';





const initialState = {
	employees: localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [],
	loading: false,
	error: false
}

// Slice

const slice = createSlice({
	name: 'employee',
	initialState,

	reducers: {

		employeeAddedPending: (state, action) => {

			state.loading = true

		},

		employeeAddedError: (state, action) => {
			state.error = action.payload
			state.loading = false
		},


		employeeAddedSuccess: (state, action) => {

			const newEmployee = {
				id: Math.random() * 100,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				dob: action.payload.dob,
				startDate: action.payload.startDate,
				street: action.payload.street,
				city: action.payload.city,
				state: action.payload.stte,
				department: action.payload.department
			};

			state.employees = [...state.employees, newEmployee]
			state.loading = false







		}
	}
});

// Actions

export const { addEmployee } = slice.actions;
export default slice.reducer;

// export const addNewEmployee = ({ firstName, lastName, dob, startDate, street, city, state, department }) => (
// 	dispatch
// ) => {
// 	try {
// 		dispatch(addNewEmployeeSucess());
// 	} catch (e) {}
// };
