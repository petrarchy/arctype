import * as LOGIN from './action_types';
import query from '../util/query';

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

export function attemptLogin(uid, password) {
    return async function (dispatch) {
        await fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({uid: uid, password: password})
        });
        const data = await query({query: '{ auth }'});
        if(data.auth)
            window.location = '/main';
        dispatch(login());
    };
}
