import {combineReducers} from "redux";
import login from "../Login/reducer";
import register from "../Register/reducer";

export default combineReducers({
    login: login,
    register: register
});
