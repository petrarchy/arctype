
const pkg = require('./package');
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/lib'),
        libraryTarget: 'umd',
        library: 'petra',
        filename: 'index.js'
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
                loader: 'babel'
            },
            {
                test: /\.(scss|css)$/,
                loader: 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin('bundle.css', {allChunks: true}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            VERSION: JSON.stringify(pkg.version)
        })
    ]
};
