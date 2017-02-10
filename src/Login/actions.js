import * as LOGIN from './action_types';
import {browserHistory} from 'react-router';
import * as auth from '../util/auth';

export function setUsername(value) {
    return {
        type: LOGIN.USERNAME,
        value
    };
}

export function setPassword(value) {
    return {
        type: LOGIN.PASSWORD,
        value
    };
}

export function toggleRemember(value) {
    return {
        type: LOGIN.REMEMBER,
        value
    };
}

export function login() {
    return {
        type: LOGIN.SUBMIT
    };
}

export function attemptLogin(router, uid, password) {
    return async function (dispatch) {
        const valid = await auth.login(uid, password);
        if(valid)
            browserHistory.push('/main');
        dispatch(login());
    };
}
