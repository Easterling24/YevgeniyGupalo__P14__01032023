import { ADD_NEW_EMPLOYEE_SUCCESS, ADD_NEW_EMPLOYEE_FAIL, ADD_NEW_EMPLOYEE_PENDING } from "../constants/employeeConstants"


const initialState = {
    employees: localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [],
    setLoading: false,
    error: false
}

console.log(initialState.employees)


export default function employeeReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {

        case ADD_NEW_EMPLOYEE_PENDING:
            return {
                ...state,
                setLoading: true
            }

        case ADD_NEW_EMPLOYEE_FAIL:
            return {
                ...state,
                setLoading: false,
                error: payload
            }
        case ADD_NEW_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: [...state.employees, payload],
                setLoading: false
            }

        default:
            return state


    }
}