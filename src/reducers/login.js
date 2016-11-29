import {combineReducers} from "redux";
import {LOGIN_USERNAME, LOGIN_PASSWORD, LOGIN_REMEMBER} from "../actions/types";

function usernameReducer(state = "", action){
    if (action.type === LOGIN_USERNAME){
        return action.value;
    }
    return state;
}

function passwordReducer(state = "", action){
    if (action.type === LOGIN_PASSWORD){
        return action.value;
    }
    return state;
}

function rememberReducer(state = false, action){
    if (action.type === LOGIN_REMEMBER){
        return action.value;
    }
    return state;
}

export default combineReducers({
    username: usernameReducer,
    password: passwordReducer,
    remember: rememberReducer
});
