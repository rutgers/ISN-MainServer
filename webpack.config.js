var webpack = require("webpack");

var CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
    //Root for front end
    context: __dirname + "/client",
    //Entry point
    entry: "./js/app.module.js",
    //Output files
    output: {
        path: __dirname + "/client",
        filename: "app.bundle.js"
    },
    //Use sourcemaps
    devtool: "source-map",
    module: {
        rules: [{
            enforce: "pre",
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
        }, {
            test: /\.scss?$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader!sass-loader"
        }, {
            test: /\.html?$/,
            exclude: /node_modules/,
            loader: "html-loader"
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        // new HtmlWebpackPlugin({
        //     template: "index.html"
        // }),
        new CleanWebpackPlugin(["dist"])
    ]
};

module.exports = config;
