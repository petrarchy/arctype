import {combineReducers} from "redux";
import {LOGIN} from "../actions/types";

function usernameReducer(state = "", action){
    if (action.type === LOGIN.USERNAME){
        return action.value;
    }
    return state;
}

function passwordReducer(state = "", action){
    if (action.type === LOGIN.PASSWORD){
        return action.value;
    }
    return state;
}

function rememberReducer(state = false, action){
    if (action.type === LOGIN.REMEMBER){
        return action.value;
    }
    return state;
}

export default combineReducers({
    username: usernameReducer,
    password: passwordReducer,
    remember: rememberReducer
});
