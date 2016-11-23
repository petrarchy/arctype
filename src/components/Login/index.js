import React, {Component, PropTypes} from "react";
import {themr} from "react-css-themr";
import style from "./style.scss";
import constants from "../constants";

class Login extends Component {
    static propTypes = {
        theme: PropTypes.object
    }

    render() {
        const {theme} = this.props;
        return (
            <div className={theme.container}>
                <div className={theme.property}>
                    <label className={theme.propertyLabel} htmlFor="uname">{constants.USERNAME}</label>
                    <input type="text" id="uname" placeholder={constants.USERNAME} required={true} />
                    <input type="checkbox" id="remember" required={true} />
                    <label className={theme.propertyLabel} htmlFor="remember">{constants.REMEMBER}</label>
                </div>
                <div className={theme.property}>
                    <label className={theme.propertyLabel} htmlFor="pword">{constants.PASSWORD}</label>
                    <input type="text" id="pword" placeholder={constants.PASSWORD} required={true} />
                </div>
                <div className={theme.login}>
                    <button type="submit" disabled="enabled">{constants.SUBMIT}</button>
                </div>
            </div>
        );
    }
}

export default themr("LOGIN", style)(Login);
