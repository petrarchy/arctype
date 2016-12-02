
import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import style from './style.scss';

import store from './store';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.element
    }

    render() {
        const {children} = this.props;
        return (
            <Provider store={store}>
                <div className={style.container}>
                    {children}
                </div>
            </Provider>
        );
    }
}
