import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root_reducer';

const devtoolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, {}, devtoolsCompose(applyMiddleware(thunk)));
