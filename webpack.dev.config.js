const {merge} = require('webpack-merge');
const {resolvePath, baseConfig} = require('./webpack.base.config');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin') // 友好的错误提示

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        host: 'localhost',
        port: 9000,
        hot: true,
        open: true,
        client: {
            progress: true
        },
        static: {
            directory: resolvePath('public'),
        }
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin()
    ]
})


