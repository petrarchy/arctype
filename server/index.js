// const express = require("express");
import express from "express";
import session from "express-session";
import morgan from "morgan";

import bodyParser from "body-parser";

import graphqlHTTP from "express-graphql";
import schema from "./schema";
import db from "./db";

import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const app = express();

const PORT = 3000;

const compiler = webpack(require("../webpack.config.development.js"));

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());

// Logging middleware
app.use(morgan("dev"));

app.use(session({
    secret: "secretkey",
    cookie: {maxAge: 60 * 10 * 1000},
    resave: true,
    saveUninitalized: true,
}));


// GraphQL endpoint
app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.post("/login", (req, res) => {
    const {uid, password} = req.body;
    const user = db.get("users").get(uid).value();
    if (!user || user.password != password) {
        return res.send(false);
    }

    req.session.user = user;
    req.session.authenticated = true;
    res.send(true);
    console.log("user authenticated: ", user);
});

app.get("/test", (req, res) => {
    res.send(req.authenticated);
});

const server = app.listen(PORT, () => { console.log(`Demo server listening on port ${server.address().port}`); });
