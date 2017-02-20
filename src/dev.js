// Endpoint for testing only.

import 'babel-core/register';
import 'babel-polyfill';

import ReactDOM from 'react-dom';

import router from './dev_routing';

if (document.getElementById('root') === null){
    document.write('<div id="root"></div>');
}

ReactDOM.render(
    router,
    document.getElementById('root')
);
