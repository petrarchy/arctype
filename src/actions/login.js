import {LOGIN_USERNAME, LOGIN_PASSWORD, LOGIN_REMEMBER, LOGIN_SUBMIT} from "./types";
import query from "./query";

export function setUsername(value) {
    return {
        type: LOGIN_USERNAME,
        value
    };
}

export function setPassword(value) {
    return {
        type: LOGIN_PASSWORD,
        value
    };
}

export function toggleRemember(value) {
    return {
        type: LOGIN_REMEMBER,
        value
    };
}

export function login() {
    return {
        type: LOGIN_SUBMIT
    };
}

export function attemptLogin(uid, password) {
    return async function (dispatch) {
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({uid: uid, password: password})
        });
        console.log("res: ", res);
        dispatch(login());
    };
}
