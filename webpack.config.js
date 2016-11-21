
const NODE_ENV = process.env.NODE_ENV;
const package = require("./package");
const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var CONFIG;
if (NODE_ENV == "development"){
    CONFIG = require("./webpack.config.development")
} else if (NODE_ENV == "production") {
    CONFIG = require("./webpack.config.production")
}

module.exports = CONFIG
