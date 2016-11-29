import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import root from "./root";

const devtoolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(root, {}, devtoolsCompose(applyMiddleware(thunk)));
