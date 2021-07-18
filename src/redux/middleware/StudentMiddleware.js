import axios from 'axios';
import {
    STUDENT_URL,
    STUDENTS_URL,
} from '../../config/urls'

import {
    getStudentsStart, getStudentsSuccess, getStudentsError,
    getStudentStart, getStudentSuccess, getStudentError,
    createStudentStart, createStudentSuccess, createStudentError,
    updateStudentStart, updateStudentSuccess, updateStudentError,
    deleteStudentStart, deleteStudentSuccess, deleteStudentError,
} from "../reducers/StudentReducer";


export const getStudentsMiddleware = ( ) => {
    return function (dispatch) {

        dispatch(getStudentsStart());

        return axios.get(
            STUDENTS_URL,

        ).then(function (response) {


            dispatch(getStudentsSuccess(response.data));


        }).catch(function (error) {


            if (error.response) {

                dispatch(getStudentsError({ message: error.response.data.message }));
                return;
            }
            dispatch(getStudentsError({ message: error.message }));


        });
    };

}


export const getStudentMiddleware = ( id) => {
    return function (dispatch) {

        dispatch(getStudentStart());

        return axios.get(
            `${STUDENT_URL}${id}`,

        ).then(function (response) {


            dispatch(getStudentSuccess(response.data));


        }).catch(function (error) {


            if (error.response) {

                dispatch(getStudentError({ message: error.response.data.message }));
                return;
            }
            dispatch(getStudentError({ message: error.message }));


        });
    };

}


export const createStudentMiddleware = (first_name , last_name ,email ,department) => {
    return function (dispatch) {

        dispatch(createStudentStart());

        return axios.post(
            STUDENTS_URL,

            {first_name , last_name , email , department},


        ).then(function (response) {

            dispatch(createStudentSuccess(response.data));

        }).catch(function (error) {

            if (error.response) {
                dispatch(createStudentError({ message: error.response.data.message }));
                return;
            }
            dispatch(createStudentError({ message: error.message }));

        });
    };

}

export const updateStudentMiddleware = (id ,first_name , last_name ,email ,department) => {
    return function (dispatch) {

        dispatch(updateStudentStart());

        return axios.put(
            `${STUDENT_URL}${id}`,


            {first_name , last_name ,email,department},


        ).then(function (response) {

            dispatch(updateStudentSuccess(response.data));

        }).catch(function (error) {

            if (error.response) {
                dispatch(updateStudentError({ message: error.response.data.message }));
                return;
            }
            dispatch(updateStudentError({ message: error.message }));

        });
    };

}


export const deleteStudentMiddleware = (id ) => {
    return function (dispatch) {

        dispatch(deleteStudentStart());

        return axios.delete(
            `${STUDENT_URL}${id}`

        ).then(function (response) {

            dispatch(deleteStudentSuccess({ message: response.data }));

        }).catch(function (error) {

            if (error.response) {
                dispatch(deleteStudentError({ message: error.response.data.message }));
                return;
            }
            dispatch(deleteStudentError({ message: error.message }));

        });
    };

}
