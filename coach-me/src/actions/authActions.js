import axios from 'axios';
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
    GET_RECORDS_START,
    GET_RECORDS_SUCCESS,
    GET_RECORDS_FAILURE
} from './types';

//Coach Registration endpoint
export const registerCoach = props => dispatch => {
    console.log(props);

    dispatch({ type: REGISTER_START });
    return axios
        .post(
            `http://localhost:5000/api/auth/register?user_type=coach`,
            props.coachCredentials
        )
        .then(res => {
            console.log(res);
            // localStorage.setItem('token', res.data.token);
            // localStorage.setItem('coachName', res.data.first_name);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.coachCredentials
            });
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.message
            });
        });
};
//Coach login endpoint
export const loginCoach = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post(`${process.env.REACT_APP_BACK_END_URL}/coachRoute/login`, creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('coachName', res.data.coachName);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.coachName
            });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err
            });
        });
};

//Get Coach Clientlist
export const getClients = token => dispatch => {
    const headers = { Authorization: token };
    dispatch({ type: GET_RECORDS_START });
    axios
        .get(`${process.env.REACT_APP_BACK_END_URL}/coachRoute/getPatients`, {
            headers: headers
        })
        .then(res => {
            dispatch({
                type: GET_RECORDS_SUCCESS,
                payload: res.data.patientList
            });
        })
        .catch(err => {
            dispatch({
                type: GET_RECORDS_FAILURE,
                payload: err.message
            });
        });
};
