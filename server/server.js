const express = require("express");
const morgan = require("morgan");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");

const app = express();

const PORT = 3000;

app.use(webpackMiddleware(webpack(require("../webpack.config.development.js"))));

app.use(morgan("dev"));

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => { console.log(`Demo server listening on port ${PORT}`); });
