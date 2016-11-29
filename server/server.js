// const express = require("express");
import express from "express";
import morgan from "morgan";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const app = express();

const PORT = 3000;

const compiler = webpack(require("../webpack.config.development.js"));

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.use(morgan("dev"));

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => { console.log(`Demo server listening on port ${PORT}`); });
