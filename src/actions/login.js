import {LOGIN} from "./types";
import query from "./query";

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
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            credentials: "same-origin",
            body: JSON.stringify({uid: uid, password: password})
        });
        console.log("res: ", res);
        const auth = await query({query: "{ auth }"});
        console.log("auth test: ", auth);
        dispatch(login());
    };
}
