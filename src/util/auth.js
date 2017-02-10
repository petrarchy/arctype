import query from './query';
import {browserHistory} from 'react-router';

export async function authenticate () {
    const res = await query({query: '{ auth }'});
    return res.auth;
}

export function getToken() {
    return localStorage.token;
}

export function loggedIn() {
    return !!localStorage.token;
}

export async function login(uid, password) {
    await fetch('/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({uid: uid, password: password})
    });
    const res = await query({query: '{ auth }'});
    localStorage.token = res.token;
    return res.auth;
}

export function logout(){
    delete localStorage.token;
    browserHistory.push('/');
}
