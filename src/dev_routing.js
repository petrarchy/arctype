import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

import React from 'react';
import App from './App';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';

import * as auth from './util/auth';

function MainPage () {
    return (
        <div>
            <div>Logged in!</div>
            <button onClick={auth.logout}>Logout</button>
        </div>
    );
}

async function requireAuth (nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

const routes = (
    <Route path="/" component={App}>
        <Route path="" component={Navigation}>
            <IndexRedirect to="/login" />
            <Route path="login" component={Login} />
            <Route path="main" component={MainPage} onEnter={requireAuth}/>
            <Route path="register" component={Register} />
        </Route>
    </Route>
);

const router = <Router history={browserHistory}>{routes}</Router>;
export default router;
