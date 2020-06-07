import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE,
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_FAILURE,
    EMAIL_REQUEST_SUCCESS,
    EMAIL_REQUEST_FAILURE,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAILURE,
    GET_METRICS_START,
    GET_METRICS_SUCCESS,
    GET_METRICS_FAILURE,
    GET_CLIENT_INFO,
    CLIENT_REGISTER_SUCCESS,
    CLIENT_LOGIN_SUCCESS
} from '../actions/types';

const initialState = {
    message: '',
    LoginAttempts: 0,
    clientinfo: {},
    records: null,
    Blood_sugar: 0,
    Weight: 0,
    Blood_pressure_over: 0,
    Blood_pressure_under: 0,
    Date_time: null,
    isfetching: false,
    error: '',
    client_data: {},

    clientMetrics: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_METRIC_START:
            return {
                ...state,
                isfetching: true,
                error: ''
            };
        case UPDATE_METRIC_SUCCESS:
            return {
                ...state,
                isfetching: false,
                records: { ...action.payload },
                error: ''
            };
        case UPDATE_METRIC_FAILURE:
            return {
                ...state,
                isfetching: false,
                err: action.payload
            };
        case GET_CLIENTS_SUCCESS:
            return {
                ...state,
                isfetching: false,
                client_data: action.payload,
                error: ''
            };
        case GET_CLIENTS_FAILURE:
            return {
                ...state,
                isfetching: false,
                error: action.payload
            };
        case EMAIL_REQUEST_SUCCESS:
            return {
                ...state,
                isfetching: false,
                error: action.payload
            };
        case  EMAIL_REQUEST_FAILURE:
            return {
                ...state,
                isfetching: false,
                error: action.payload
            };
        case PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                isfetching: false,
                error: action.payload
            };
        case PASSWORD_RESET_FAILURE:
            return {
                ...state,
                isfetching: false,
                error: action.payload
            };
        case GET_METRICS_START:
            return {
                ...state,
                isfetching: true,
                error: ''
            };
        case GET_METRICS_SUCCESS:
            return {
                ...state,
                isfetching: false,
                clientMetrics: [...action.payload],
                error: ''
            };
        case GET_METRICS_FAILURE:
            return {
                ...state,
                isfetching: false,
                error: action.payload
            };

        case LOGIN_START:
            return {
                ...state,
                isfetching: true,
                error: ''
            };
        case CLIENT_REGISTER_SUCCESS:
            return {
                ...state,
                client_data: action.payload
            }
        case CLIENT_LOGIN_SUCCESS:
            return {
                ...state,
                client_data: action.payload,
                error: ''
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isfetching: false,
                error: action.payload
            };
        case GET_CLIENT_INFO:
        return {
            ...state,
            client_data: action.payload

        }
        default:
            return state;
    }
};