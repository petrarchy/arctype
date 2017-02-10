import {Router, Route, IndexRedirect, Link, browserHistory} from 'react-router';

import React from 'react';
import App from './App';
import Login from './Login';
import Register from './Register';

import * as auth from './util/auth';

function Navigation () {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}

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
        <IndexRedirect to="/login" />
        <Route path="login" component={Login} />
        <Route path="main" component={MainPage} onEnter={requireAuth}/>
        <Route path="register" component={Register} />
    </Route>
);

const router = <Router history={browserHistory}>{routes}</Router>;
export default router;
