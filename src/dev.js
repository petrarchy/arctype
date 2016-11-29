
import "babel-core/register";
import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Login";
import Register from "./components/Register";

if (document.getElementById("root") == null){
    document.write("<div id='root'></div>");
}

ReactDOM.render(
    <App><Login /><br/><Register /></App>,
    document.getElementById("root")
);
