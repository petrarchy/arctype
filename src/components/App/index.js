
import React, {Component} from "react";
import {Provider} from "react-redux";
import style from "./style.scss";

import store from "../../reducers/store";
import Login from "../Login";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className={style.container}>
                    <Login/>
                </div>
            </Provider>
        );
    }
}
