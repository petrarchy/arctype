import {Link} from 'react-router';
import React, {Component, PropTypes} from 'react';
import {themr} from 'react-css-themr';

import style from './style.scss';

class Navigation extends Component {
    static propTypes = {
        theme: PropTypes.object,
        children: PropTypes.node
    };

    render() {
        const {theme, children} = this.props;
        return (
            <div className={theme.pageContent}>
                <div className={theme.navigation}>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                <div className={theme.navContent}>
                    {children}
                </div>
            </div>
        );
    }
}

export default themr('NAVIGATION', style)(Navigation);
