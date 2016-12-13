
const pkg = require('./package');
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/dev.js', 'webpack-hot-middleware/client'],
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'dev.js'
    },
    resolve: {
        extensions: ['', '.scss', '.jsx', '.js']
    },
    postcss: [autoprefixer],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract('css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './node_modules')]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'App',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('bundle.css', {allChunks: true}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            VERSION: JSON.stringify(pkg.version)
        })
    ]
};
