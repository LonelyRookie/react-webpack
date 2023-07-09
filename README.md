
# 介绍
本项目是通过webpack构建的react项目。

## 运行
```bash
# 启动本地开发环境
npm run dev

# 生产环境进行打包，打包后的文件在dist目录下
npm run build


```

# 官方参考文档
[webpack](https://webpack.docschina.org/)

[babeljs](https://www.babeljs.cn/docs/usage)


# webpack.config.js
本项目将webpack.config.js拆分为三个文件，分别是：webpack.base.config.js、webpack.dev.config.js、webpack.prod.config.js ，方便开发和生产环境的配置。




# 开始搭建项目时安装的依赖

```bash

# webpack
npm install --save-dev webpack webpack-cli webpack-dev-server

# 生成一个 HTML5 文件， 其中包括使用 script 标签的 body 中的所有 webpack 包
npm install --save-dev html-webpack-plugin

# 清理 /dist 文件夹
npm install --save-dev clean-webpack-plugin

# css, less loader
npm install --save-dev style-loader css-loader less less-loader

# 处理CSS添加浏览器前缀，压缩 CSS
npm install --save-dev postcss-loader autoprefixer 

# CSS提取到单独的文件
npm install --save-dev mini-css-extract-plugin

# 压缩CSS
npm install --save-dev css-minimizer-webpack-plugin 

# 合并配置
npm install --save-dev webpack-merge

# Babel预设
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/polyfill

# 使用 Babel 和 webpack 转译 JavaScript 文件
npm install --save-dev babel-loader

# react
npm install --save react react-dom 

# html模板中的变量替换
npm install --save-dev interpolate-html-plugin

# 优化打包时的提示信息，友好的错误提示插件
npm install --save-dev friendly-errors-webpack-plugin

```