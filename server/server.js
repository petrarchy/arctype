// const express = require("express");
import express from "express";
import session from "express-session";
import morgan from "morgan";

import bodyParser from "body-parser";

import mongoose from "mongoose";
import connectMongodbSession from "connect-mongodb-session";
const MongoDBStore = connectMongodbSession(session);

import graphqlHTTP from "express-graphql";
import schema from "./schema";

import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import UserModel from "./model/user";

const app = express();
const store = new MongoDBStore({
    uri: "mongodb://localhost/sessions",
    collection: "sessions"
});

const PORT = 3000;

const compiler = webpack(require("../webpack.config.development.js"));

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());

// Logging middleware
app.use(morgan("dev"));

app.use(session({
    store: store,
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

app.post("/login", async function(req, res) {
    console.log("REQ.SESSION: ", req.session);
    console.log("REQ.BODY: ", req.body);
    var user = await UserModel
        .findOne({
            uid: req.body.uid
        }).exec();
    if (!user) {
        return res.send(false);
    }
    console.log("user logged in: ", user);
    req.session.user = user.uid;
    req.session.authenticated = true;
    res.send(true);
});

mongoose.connect("mongodb://localhost/graphql");

const server = app.listen(PORT, () => { console.log(`Demo server listening on port ${server.address().port}`); });
