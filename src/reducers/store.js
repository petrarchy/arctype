import {createStore, compose, applyMiddleware} from "redux";
import root from "./root";

const devtoolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(root, {}, devtoolsCompose(applyMiddleware(/* middleware */)));
