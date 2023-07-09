const {merge} = require('webpack-merge');
const {resolvePath, baseConfig} = require('./webpack.base.config');
const {CleanWebpackPlugin} = require("clean-webpack-plugin"); // 清理 dist 文件夹
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // css 压缩

module.exports = merge(baseConfig, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new CssMinimizerPlugin()
    ]
})

