const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html 模板
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css 提取单独文件
const webpack = require("webpack"); // webpack
const InterpolateHtmlPlugin = require("interpolate-html-plugin");// html 模板中的变量替换

const resolvePath = (_path) => path.resolve(__dirname, _path);

const baseConfig = {
    entry: resolvePath("./src/index.js"),
    output: {
        path: resolvePath("./dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'], // 将style-loader换成MiniCssExtractPlugin.loader, 提取css为文件时style-loader会创建style标签
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                sideEffects: true
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
                include: resolvePath('src'),
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|jpeg|gif)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolvePath("./public/index.html"),
            filename: "index.html",
            title: "react app",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash:8].css",
        }),
        new webpack.ProvidePlugin({
            "React": "react"
        }),
        new InterpolateHtmlPlugin({
            // PUBLIC_URL: 'static'
            PUBLIC_URL: '.'
        })
    ]
}

module.exports = {resolvePath, baseConfig}