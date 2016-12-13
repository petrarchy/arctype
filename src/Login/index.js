import React, {Component, PropTypes} from 'react';
import {themr} from 'react-css-themr';
import {connect} from 'react-redux';

import {setUsername, setPassword, toggleRemember, toggleShow, attemptLogin} from './actions';
import style from './style.scss';
import constants from '../constants';

class Login extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        username: PropTypes.string,
        password: PropTypes.string,
        remember: PropTypes.bool,
        show: PropTypes.bool,
        onUsernameChange: PropTypes.func,
        onPasswordChange: PropTypes.func,
        onRememberToggle: PropTypes.func,
        onShowToggle: PropTypes.func,
        onLogin: PropTypes.func
    }

    render() {
        const {theme, username, password, remember, show, onUsernameChange, onPasswordChange, onRememberToggle, onShowToggle, onLogin} = this.props;
        let showtype = show ? 'text' : 'password';
        return (
            <form>
            <fieldset className={theme.login}>
                <div className={theme.help}><a href='' className={theme.docs}>{constants.HELP}</a></div>
                <legend><ul><li className={theme.tab}>{constants.LOGIN}</li><li className={theme.tab}>{constants.REGISTER}</li></ul></legend>
                <p className={theme.instruction}>{constants.LOGIN_INSTRUCTIONS}</p>
                <div className={theme.property}>
                    <label className={theme.propertyname} htmlFor='uname'>{constants.USERNAME}</label>
                    <input type='text' id='uname' placeholder={constants.USERNAME} required={true} value={username} onChange={(e) => { onUsernameChange(e.target.value); }}/>
                    <input type='checkbox' id='remember' checked={remember} onChange={(e) => { onRememberToggle(e.target.checked, username); }}/>
                    <label className={theme.valuetoggle} htmlFor='remember'>{constants.REMEMBER}</label>
                </div>
                <div className={theme.property}>
                    <label className={theme.propertyname} htmlFor='pword'>{constants.PASSWORD}</label>
                    <input type={showtype} id='pword' placeholder={constants.PASSWORD} required={true} value={password} onChange={(e) => { onPasswordChange(e.target.value); }} />
                    <input type='checkbox' id='showhide' checked={show} onChange={(e) => { onShowToggle(e.target.checked); }}/>
                    <label className={theme.valuetoggle} htmlFor='showhide'>{constants.SHOW}</label>
                </div>
                <div className={theme.action}>
                    <p className={theme.error}>{constants.LOGIN_FAILED}</p>
                    <button type='submit' onClick={() => { onLogin(username, password, remember); }}>{constants.LOGIN_SUBMIT}</button>
                </div>
            </fieldset>
            </form>
        );
    }
}

const ReduxLogin = connect((state) => {
    const {login} = state;
    return {
        username: login.username,
        password: login.password,
        remember: login.remember,
        show: login.show
    };
}, (dispatch) => {
    return {
        onUsernameChange: (val) => { dispatch(setUsername(val)); },
        onPasswordChange: (val) => { dispatch(setPassword(val)); },
        onRememberToggle: (val) => { dispatch(toggleRemember(val)); },
        onShowToggle: (val) => { dispatch(toggleShow(val)); },
        onLogin: (username, password, remember) => { dispatch(attemptLogin(username, password, remember)); }
    };
})(Login);

export {Login as LoginBase};
export default themr('LOGIN', style)(ReduxLogin);
