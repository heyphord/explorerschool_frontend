import axios from 'axios';
import {
    TUTOR_URL,
    TUTORS_URL,
    ASSIGN_STUDENT_TO_TUTOR_URL
} from '../../config/urls'

import {
    getTutorsStart, getTutorsSuccess, getTutorsError,
    getTutorStart, getTutorSuccess, getTutorError,
    createTutorStart, createTutorSuccess, createTutorError,
    updateTutorStart, updateTutorSuccess, updateTutorError,
    deleteTutorStart, deleteTutorSuccess, deleteTutorError,
    assignStudentToTutorStart, assignStudentToTutorSuccess, assignStudentToTutorError,
} from "../reducers/TutorReducer";


export const getTutorsMiddleware = ( ) => {
    return function (dispatch) {

        dispatch(getTutorsStart());

        return axios.get(
            TUTORS_URL,

        ).then(function (response) {


            dispatch(getTutorsSuccess(response.data));


        }).catch(function (error) {


            if (error.response) {

                dispatch(getTutorsError({ message: error.response.data.message }));
                return;
            }
            dispatch(getTutorsError({ message: error.message }));


        });
    };

}


export const getTutorMiddleware = ( id) => {
    return function (dispatch) {

        dispatch(getTutorStart());

        return axios.get(
            `${TUTOR_URL}/${id}`,

        ).then(function (response) {


            dispatch(getTutorSuccess(response.data));


        }).catch(function (error) {


            if (error.response) {

                dispatch(getTutorError({ message: error.response.data.message }));
                return;
            }
            dispatch(getTutorError({ message: error.message }));


        });
    };

}


export const createTutorMiddleware = (first_name , last_name) => {
    return function (dispatch) {

        dispatch(createTutorStart());

        return axios.post(
            TUTORS_URL,

            {first_name , last_name},


        ).then(function (response) {

            dispatch(createTutorSuccess(response.data));

        }).catch(function (error) {

            if (error.response) {
                dispatch(createTutorError({ message: error.response.data.message }));
                return;
            }
            dispatch(createTutorError({ message: error.message }));

        });
    };

}

export const updateTutorMiddleware = (id ,first_name , last_name) => {
    return function (dispatch) {

        dispatch(updateTutorStart());

        return axios.put(
            `${TUTOR_URL}/${id}`,


            {first_name , last_name},


        ).then(function (response) {

            dispatch(updateTutorSuccess(response.data));

        }).catch(function (error) {

            if (error.response) {
                dispatch(updateTutorError({ message: error.response.data.message }));
                return;
            }
            dispatch(updateTutorError({ message: error.message }));

        });
    };

}


export const deleteTutorMiddleware = (id ) => {
    return function (dispatch) {

        dispatch(deleteTutorStart());

        return axios.delete(
            `${TUTOR_URL}/${id}`

        ).then(function (response) {

            dispatch(deleteTutorSuccess({ message: response.data }));

        }).catch(function (error) {

            if (error.response) {
                dispatch(deleteTutorError({ message: error.response.data.message }));
                return;
            }
            dispatch(deleteTutorError({ message: error.message }));

        });
    };

}

export const assignStudentToTutorMiddleware = (tutor_id,student_id ) => {
    return function (dispatch) {

        dispatch(assignStudentToTutorStart());

        return axios.post(
            ASSIGN_STUDENT_TO_TUTOR_URL,

            { tutor_id,student_id}

        ).then(function (response) {

            dispatch(assignStudentToTutorSuccess({ message: response.data }));

        }).catch(function (error) {

            if (error.response) {
                dispatch(assignStudentToTutorError({ message: error.response.data.message }));
                return;
            }
            dispatch(assignStudentToTutorError({ message: error.message }));

        });
    };

}