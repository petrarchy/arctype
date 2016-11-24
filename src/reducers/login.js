import {combineReducers} from "redux";
import {SET_USERNAME, SET_PASSWORD, TOGGLE_REMEMBER} from "../actions/types";

function username_reducer(state = "", action){
    if (action.type === SET_USERNAME){
        return action.value;
    }
    return state;
}

function password_reducer(state = "", action){
    if (action.type === SET_PASSWORD){
        return action.value;
    }
    return state;
}

function remember_reducer(state = false, action){
    if (action.type === TOGGLE_REMEMBER){
        return action.value;
    }
    return state;
}

export default combineReducers({
    username: username_reducer,
    password: password_reducer,
    remember: remember_reducer
});
