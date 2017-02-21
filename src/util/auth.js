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

export async function login(username, password) {
    try {
        const res = await fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({username: username, password: password})
        });
        if (!res.ok)
            throw new Error('failed login');
        localStorage.token = true;
        return true;
    } catch (err) {
        console.warn('failed login: ', err);
        delete localStorage.token;
        return false;
    }
}

export function logout(){
    delete localStorage.token;
    browserHistory.push('/');
}
