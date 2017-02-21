import React, { Component, PropTypes } from 'react';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';
import {
    addLocaleData,
    IntlProvider,
    FormattedMessage,
    defineMessages
} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';

import { setUsername, setPassword, toggleRemember, attemptLogin } from './actions';
import Input from '../Form/Input';
import style from './style.scss';
import constants from '../constants';
import zhMessage from './l10n/zh_CN';
import enMessage from './l10n/en_US';

addLocaleData(enLocaleData);
addLocaleData(zhLocaleData);

const getLocaleMessage = (locale) => {
    switch (locale) {
        case 'en':
            return enMessage;
        case 'zh':
            return zhMessage;
    }
}

const placeholderMessages = defineMessages({
    username: {
        id: 'placeholder.username'
    },
    password: {
        id: 'placeholder.password'
    }
})

class Login extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        username: PropTypes.string,
        password: PropTypes.string,
        remember: PropTypes.bool,
        onUsernameChange: PropTypes.func,
        onPasswordChange: PropTypes.func,
        onRememberToggle: PropTypes.func,
        onLogin: PropTypes.func,
        locale: PropTypes.string
    }

    static defaultProps = {
        locale: 'en'
    }

    render() {
        const {theme, username, password, remember, onUsernameChange, onPasswordChange, onRememberToggle, onLogin, locale} = this.props;
        return (
            <IntlProvider locale={locale} messages={getLocaleMessage(locale)}>
                <div className={theme.container}>
                    <fieldset>
                        <legend>
                            <FormattedMessage
                                id="LOGIN"
                            />
                        </legend>
                            <div className={theme.property}>
                                <label
                                    className={theme.propertyLabel}
                                    htmlFor='uname'
                                >
                                    <FormattedMessage
                                        id="USERNAME"
                                    />
                                </label>
                                <Input
                                    type='text'
                                    id='uname'
                                    placeholder={placeholderMessages.username}
                                    required={true}
                                    value={username}
                                    onChange={(e) => { onUsernameChange(e.target.value); }}
                                />
                                <Input
                                    type='checkbox'
                                    id='remember'
                                    required={true}
                                    value={remember}
                                    onChange={(e) => { onRememberToggle(e.target.checked); }}
                                />
                                <label
                                    className={theme.propertyLabel}
                                    htmlFor='remember'
                                >
                                    <FormattedMessage
                                        id="REMEMBER"
                                    />
                                </label>
                            </div>
                            <div className={theme.property}>
                                <label className={theme.propertyLabel} htmlFor='pword'>
                                    <FormattedMessage
                                        id="PASSWORD"
                                    />
                                </label>
                                <Input
                                    type='password'
                                    id='pword'
                                    placeholder={placeholderMessages.password}
                                    required={true}
                                    value={password}
                                    onChange={(e) => { onPasswordChange(e.target.value); }}
                                />
                            </div>
                            <div className={theme.login}>
                                <button type='submit' onClick={() => { onLogin(username, password); }}>
                                    <FormattedMessage
                                        id="SUBMIT"
                                    />
                                </button>
                            </div>
                    </fieldset>
                </div>
            </IntlProvider>
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
        onUsernameChange: (val) => {dispatch(setUsername(val)); },
        onPasswordChange: (val) => {dispatch(setPassword(val)); },
        onRememberToggle: (val) => {dispatch(toggleRemember(val)); },
        onLogin: (uid, password) => {dispatch(attemptLogin(uid, password)); }
    };
})(Login);

export {Login as LoginBase};
export default themr('LOGIN', style)(ReduxLogin);
