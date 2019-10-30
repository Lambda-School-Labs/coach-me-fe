import axios from 'axios';
import {
    GET_CLIENTS_START,
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_FAILURE,
    ADD_CLIENT,
    DELETE_CLIENT,
    CLIENTS_ERROR,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE,
    GET_RECORDS_START,
    GET_RECORDS_SUCCESS,
    GET_RECORDS_FAILURE
} from './types';

const headers = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
};

const devPath = `https://coach-me-production.herokuapp.com`;

export const getClientInfo = props => dispatch => {
    console.log(props);
    const clientnum = { clientPhone: props.num };
    dispatch({ type: GET_CLIENTS_START });
    axios
        .post(`${devPath}/clientRoute/login`, clientnum)
        .then(res => {
            // console.log('res.data', res.data.loginAttempts);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('loginAttempts', res.data.loginAttempts);
            const loginAttempts = localStorage.getItem('loginAttempts');
            // console.log('Look at all this info!', loginAttempts);
            if (loginAttempts == 1) {
                props.history.push('/welcome');
            } else {
                props.history.push('/metrics');
            }

            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data.clientObject.fields
            });
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err
            });
        });
};
export const getClientInfoLogin = props => dispatch => {
    console.log(props);
    const clientnum = { clientPhone: props.num };
    dispatch({ type: GET_CLIENTS_START });
    axios
        .post(`${devPath}/clientRoute/login`, clientnum)
        .then(res => {
            // console.log('res.data', res.data.loginAttempts);
            localStorage.setItem('token', res.data.token);
            // localStorage.setItem('loginAttempts', res.data.loginAttempts);
            const loginAttempts = localStorage.getItem('loginAttempts');
            // console.log('Look at all this info!', loginAttempts);

            props.history.push('metric-form');

            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data.clientObject.fields
            });
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err
            });
        });
};

export const addMetric = metricUpdate => dispatch => {
    dispatch({ type: UPDATE_METRIC_START });
    axios
        .post(`${devPath}/clientRoute/logMetrics `, metricUpdate, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            }
        })
        .then(res => {
            dispatch({
                type: UPDATE_METRIC_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: UPDATE_METRIC_FAILURE,
                payload: err.message
            });
        });
};

export const getClientRecords = clientId => dispatch => {
    dispatch({ type: GET_RECORDS_START });
    axios
        .get(`${devPath}/clientRoute/paginationGetMetrics`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(results => {
            const clientRecords = [...results.data.clientRecords];
            dispatch({
                type: GET_RECORDS_SUCCESS,
                payload: clientRecords
            });
        })
        .catch(err => {
            dispatch({
                type: GET_RECORDS_FAILURE,
                payload: err.message
            });
        });
};
