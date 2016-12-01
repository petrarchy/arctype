import {REGISTER} from "./types";
import query from "./query";

export function setUsername(value) {
    return {
        type: REGISTER.USERNAME,
        value
    };
}

export function setPassword(value) {
    return {
        type: REGISTER.PASSWORD,
        value
    };
}

export function setFullName(value) {
    return {
        type: REGISTER.FULLNAME,
        value
    };
}

export function submit() {
    return {
        type: REGISTER.SUBMIT
    };
}

export function attemptRegister(name, password, fullName) {
    return async function (dispatch) {
        const res = await query({query: `mutation {
            createUser(data:{uid:"${name}", password:"${password}", fullName:"${fullName}"})
        }`});
        console.log("res: ", await res.json());
        dispatch(submit());
    };
}
