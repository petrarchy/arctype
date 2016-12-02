import {combineReducers} from "redux";
import REGISTER from "./action_types";

function usernameReducer(state = "", action){
    if (action.type === REGISTER.USERNAME){
        return action.value;
    }
    return state;
}

function passwordReducer(state = "", action){
    if (action.type === REGISTER.PASSWORD){
        return action.value;
    }
    return state;
}

function fullNameReducer(state = "", action){
    if (action.type === REGISTER.FULLNAME){
        return action.value;
    }
    return state;
}

export default combineReducers({
    username: usernameReducer,
    password: passwordReducer,
    fullName: fullNameReducer
});
