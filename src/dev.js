// Endpoint for testing only.

import 'babel-core/register';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Register from './Register';

if (document.getElementById('root') == null){
    document.write('<div id="root"></div>');
}

ReactDOM.render(
    <App><Login /><br/><Register /></App>,
    document.getElementById('root')
);
