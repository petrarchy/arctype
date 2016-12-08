import * as REGISTER from './action_types';
import query from '../util/query';

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
        const res = await query({
            query: `mutation CreateUserFromData($uid: String!, $password: String!, $fullName: String) {
                createUser(data:{uid: $uid, password: $password, fullName: $fullName})
            }`,
            variables: {
                uid: name,
                password: password,
                fullName: fullName
            }
        });
        console.log('res: ', await res.json());
        dispatch(submit());
    };
}
