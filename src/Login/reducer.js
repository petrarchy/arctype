import {combineReducers} from 'redux';
import * as LOGIN from './action_types';

const userExists = (localStorage.getItem('username') !== null ? localStorage.getItem('username') : '');
function usernameReducer(state = userExists, action){
    if (action.type === LOGIN.USERNAME){
        return action.value;
    } else if (action.type === LOGIN.SUBMIT){
        return (localStorage.getItem('username') !== null ? state : null);
    }
    return state;
}

function passwordReducer(state = '', action){
    if (action.type === LOGIN.PASSWORD){
        return action.value;
    } else if (action.type === LOGIN.SUBMIT){
        return null;
    }
    return state;
}

const keyExists = (localStorage.getItem('username') !== null);
function rememberReducer(state = keyExists, action){
    if (action.type === LOGIN.REMEMBER){
        return action.value;
    }
    return state;
}

function showReducer(state = false, action){
    if (action.type === LOGIN.SHOW){
        return action.value;
    }
    return state;
}

export default combineReducers({
    username: usernameReducer,
    password: passwordReducer,
    remember: rememberReducer,
    show: showReducer
});
