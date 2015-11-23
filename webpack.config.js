'use strict';
var path = require('path');
var webpack = require('webpack');
var appDir = path.join(__dirname, 'app');

module.exports = {
        context: appDir,
        entry: './index.js',
        output: {
                path: "./build",
                publicPath: "/app",
                filename: "bundle.js"
        },
        devtool: 'source-map',
        module: {
                loaders: [
                        {
                                test: /\.js$/,
                                exclude: /(node_modules|bower_components)/,
                                loader: 'ng-annotate!babel'
                        },
                        {
                                test: /\.css$/,
                                loader: "style!css"
                        },
                        {
                                test: /\.scss$/,
                                loader: 'style!css!sass'
                        },
                        {
                                test: /\.html$/,
                                loader: 'html'
                        },
                        {
                                test: /\.png/,
                                loader: 'url-loader',
                                query: {
                                        mimetype: 'image/png'
                                }
                        },
                        {
                                test: /\.jpg/,
                                loader: 'url-loader',
                                query: {
                                        mimetype: 'image/jpeg'
                                }
                        },
                        // bootstrap needed this
                        {
                                test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                                loader: 'url-loader?limit=100000'
                        },
                        // jquery support also for bootstrap
                        {
                                test: /jquery\.js$/,
                                loader: 'expose?$'
                        },
                        {
                                test: /jquery\.js$/,
                                loader: 'expose?jQuery'
                        },
                ]
        }
};
