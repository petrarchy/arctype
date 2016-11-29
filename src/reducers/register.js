import {combineReducers} from "redux";
import {REGISTER_USERNAME, REGISTER_DISPLAYNAME} from "../actions/types";

function usernameReducer(state = "", action){
    if (action.type === REGISTER_USERNAME){
        return action.value;
    }
    return state;
}

function displayNameReducer(state = "", action){
    if (action.type === REGISTER_DISPLAYNAME){
        return action.value;
    }
    return state;
}

export default combineReducers({
    username: usernameReducer,
    displayName: displayNameReducer
});
