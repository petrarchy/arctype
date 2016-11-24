import React, {Component, PropTypes} from "react";
import {themr} from "react-css-themr";
import {connect} from "react-redux";

import {setUsername, setPassword, toggleRemember} from "../../actions/login";
import style from "./style.scss";
import constants from "../constants";

class Login extends Component {
    static propTypes = {
        theme: PropTypes.object,
        username: PropTypes.string,
        password: PropTypes.string,
        remember: PropTypes.bool,
        onUsernameChange: PropTypes.func,
        onPasswordChange: PropTypes.func,
        onRememberToggle: PropTypes.func
    }

    render() {
        const {theme, username, password, remember, onUsernameChange, onPasswordChange, onRememberToggle} = this.props;
        return (
            <div className={theme.container}>
                <div className={theme.property}>
                    <label className={theme.propertyLabel} htmlFor="uname">{constants.USERNAME}</label>
                    <input type="text" id="uname" placeholder={constants.USERNAME} required={true} value={username} onChange={(e) => { onUsernameChange(e.target.value); }}/>
                    <input type="checkbox" id="remember" required={true} value={remember} onChange={(e) => { onRememberToggle(e.target.checked); }}/>
                    <label className={theme.propertyLabel} htmlFor="remember">{constants.REMEMBER}</label>
                </div>
                <div className={theme.property}>
                    <label className={theme.propertyLabel} htmlFor="pword">{constants.PASSWORD}</label>
                    <input type="text" id="pword" placeholder={constants.PASSWORD} required={true} value={password} onChange={(e) => { onPasswordChange(e.target.value); }} />
                </div>
                <div className={theme.login}>
                    <button type="submit" disabled="enabled">{constants.SUBMIT}</button>
                </div>
            </div>
        );
    }
}

const ReduxLogin = connect((state) => {
    const {login} = state;
    return {
        username: login.username,
        password: login.password,
        remember: login.remember
    };
}, (dispatch) => {
    return {
        onUsernameChange: (val) => { dispatch(setUsername(val)); },
        onPasswordChange: (val) => { dispatch(setPassword(val)); },
        onRememberToggle: (val) => { dispatch(toggleRemember(val)); }
    };
})(Login);

export default themr("LOGIN", style)(ReduxLogin);
