import {
    ADD_NEW_EMPLOYEE_FAIL,
    ADD_NEW_EMPLOYEE_SUCCESS,
    ADD_NEW_EMPLOYEE_PENDING,
} from "../constants/employeeConstants";

export const addNewEmployee = (employeeData) => (dispatch, getState) => {

    try {
        dispatch({
            type: ADD_NEW_EMPLOYEE_PENDING,
        });

        const data = employeeData;


        dispatch({
            type: ADD_NEW_EMPLOYEE_SUCCESS,
            payload: {
                firstName: data.firstName,
                lastName: data.lastName,
                dob: data.dob,
                startDate: data.startDate,
                street: data.street,
                city: data.city,
                state: data.state,
                department: data.department
            }
        });



        localStorage.setItem("employees", JSON.stringify(getState().employee.employees));
    } catch (error) {
        dispatch({
            type: ADD_NEW_EMPLOYEE_FAIL,
            payload: error,
        });
    }
};
