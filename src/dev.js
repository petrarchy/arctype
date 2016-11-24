
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Login";

if (document.getElementById("root") == null){
    document.write("<div id='root'></div>");
}

ReactDOM.render(
    <App><Login /></App>,
    document.getElementById("root")
);
