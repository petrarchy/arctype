import React, {Component, PropTypes} from "react";
import {themr} from "react-css-themr";
import {connect} from "react-redux";

import {setUsername, setPassword, setFullName, attemptRegister} from "./actions";
import style from "./style.scss";
import constants from "../constants";

class Register extends Component {
    static propTypes = {
        theme: PropTypes.object,
        username: PropTypes.string,
        password: PropTypes.string,
        fullName: PropTypes.string,
        onUsernameChange: PropTypes.func,
        onPasswordChange: PropTypes.func,
        onDisplayNameChange: PropTypes.func,
        onRegister: PropTypes.func
    }

    render() {
        const {theme, username, password, fullName, onUsernameChange,
            onDisplayNameChange, onPasswordChange, onRegister
        } = this.props;
        return (
            <div className={theme.container}>
                <div className={theme.property}>
                    <label className={theme.propertyLabel} htmlFor="uname">{constants.USERNAME}</label>
                    <input type="text" id="uname" placeholder={constants.USERNAME} required={true} value={username} onChange={(e) => { onUsernameChange(e.target.value); }}/>
                </div>
                <div className={theme.property}>
                    <label className={theme.propertyLabel} htmlFor="pword">{constants.PASSWORD}</label>
                    <input type="password" id="pword" placeholder={constants.PASSWORD} required={true} value={password} onChange={(e) => { onPasswordChange(e.target.value); }} />
                </div>
                <div className={theme.property}>
                    <label className={theme.propertyLabel} htmlFor="fullname">{constants.FULLNAME}</label>
                    <input type="text" id="fullname" placeholder={constants.FULLNAME} required={true} value={fullName} onChange={(e) => { onDisplayNameChange(e.target.value); }} />
                </div>
                <div className={theme.register}>
                    <button type="submit" onClick={() => { onRegister(username, password, fullName); }}>{constants.REGISTER}</button>
                </div>
            </div>
        );
    }
}

const ReduxRegister = connect((state) => {
    const {register} = state;
    return {
        username: register.username,
        password: register.password,
        fullName: register.fullName
    };
}, (dispatch) => {
    return {
        onUsernameChange: (val) => { dispatch(setUsername(val)); },
        onPasswordChange: (val) => { dispatch(setPassword(val)); },
        onDisplayNameChange: (val) => { dispatch(setFullName(val)); },
        onRegister: (uname, pword, dname) => { dispatch(attemptRegister(uname, pword, dname)); }
    };
})(Register);

export default themr("REGISTER", style)(ReduxRegister);
