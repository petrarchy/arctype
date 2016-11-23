
import React, {Component} from "react";
import style from "./style.scss";

import Login from "../Login";

export default class App extends Component {
    render() {
        return (
            <div className={style.container}>
                <Login/>
            </div>
        );
    }
}
