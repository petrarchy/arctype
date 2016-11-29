import {SET_USERNAME, SET_PASSWORD, TOGGLE_REMEMBER, LOGIN_SUBMIT} from "./types";

export function setUsername(value) {
    return {
        type: SET_USERNAME,
        value
    };
}

export function setPassword(value) {
    return {
        type: SET_PASSWORD,
        value
    };
}

export function toggleRemember(value) {
    return {
        type: TOGGLE_REMEMBER,
        value
    };
}

export function login() {
    return {
        type: LOGIN_SUBMIT
    };
}

export function attemptLogin() {
    return async function (dispatch) {
        const res = await fetch("/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ query: "{ hello }" })
        });
        console.log("res: ", res);
        dispatch(login());
    };
}
