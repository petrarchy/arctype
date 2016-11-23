import {createStore, compose, applyMiddleware} from "redux";
import root from "./root";

compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(root, {}, compose(applyMiddleware(/* middleware */)));
