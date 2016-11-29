const express = require("express");
const morgan = require("morgan");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

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
