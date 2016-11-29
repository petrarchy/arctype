import {combineReducers} from "redux";
import login from "./login";
import register from "./register";

export default combineReducers({
    login: login,
    register: register
});
