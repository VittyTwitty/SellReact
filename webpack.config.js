const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolveUrl = require("resolve-url");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        vendor: ['jquery', 'react', 'react-dom', 'highlight-words-core', 'react-redux', 'redux'],
        main: './scripts/index.js',
    },
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', "react"]
                    }
                }
            },
            {
                test: /\.(pug|jade)$/,
                loader: 'pug-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {loader: "style-loader!css-loader?importLoaders=1", options: {modules: true}}
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [require('autoprefixer')];
                                },
                            }
                        },
                        'resolve-url-loader',
                        'sass-loader?sourceMap'
                    ]
                })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                loader: 'url-loader?limit=30000&name=assets/fonts/[name]-[hash].[ext]',
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new CopyWebpackPlugin([
            {from: 'assets/**/*'}
        ], {
            ignore: [{
                glob: 'assets/fonts/*'
            }]
        }),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            alwaysWriteToDisk: true,
            template: 'index.pug',
            excludeChunks: ['auth', 'map', 'calculator', 'redux-modals']

        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",


            minChunks: 3,
            // (3 children must share the module before it's separated)
        })
    ]

};
