import React, {Component, PropTypes} from "react";
import {themr} from "react-css-themr";
import {connect} from "react-redux";

import {setUsername, setDisplayName, attemptRegister} from "../../actions/register";
import style from "./style.scss";
import constants from "../constants";

class Register extends Component {
    static propTypes = {
        theme: PropTypes.object,
        username: PropTypes.string,
        displayName: PropTypes.string,
        onUsernameChange: PropTypes.func,
        onDisplayNameChange: PropTypes.func,
        onRegister: PropTypes.func
    }

    render() {
        const {theme, username, displayName, onUsernameChange, onDisplayNameChange, onRegister} = this.props;
        return (
            <div className={theme.container}>
                <div className={theme.property}>
                    <label className={theme.propertyLabel} htmlFor="uname">{constants.USERNAME}</label>
                    <input type="text" id="uname" placeholder={constants.USERNAME} required={true} value={username} onChange={(e) => { onUsernameChange(e.target.value); }}/>
                </div>
                <div className={theme.property}>
                    <label className={theme.propertyLabel} htmlFor="dname">{constants.DISPLAYNAME}</label>
                    <input type="text" id="dname" placeholder={constants.DISPLAYNAME} required={true} value={displayName} onChange={(e) => { onDisplayNameChange(e.target.value); }} />
                </div>
                <div className={theme.register}>
                    <button type="submit" onClick={() => { onRegister(username, displayName); }}>{constants.REGISTER}</button>
                </div>
            </div>
        );
    }
}

const ReduxRegister = connect((state) => {
    const {register} = state;
    return {
        username: register.username,
        displayName: register.displayName
    };
}, (dispatch) => {
    return {
        onUsernameChange: (val) => { dispatch(setUsername(val)); },
        onDisplayNameChange: (val) => { dispatch(setDisplayName(val)); },
        onRegister: (uname, dname) => { dispatch(attemptRegister(uname, "test", dname)); }
    };
})(Register);

export default themr("REGISTER", style)(ReduxRegister);
