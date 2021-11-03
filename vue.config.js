'use strict'
const path = require('path')
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

const resolve = dir => path.join(__dirname, dir)

const isProduction = process.env.NODE_ENV === "production";


// 代理列表
const PROXY_LIST = {
  "/dev": {
    target: "http://127.0.0.1:8002",
    changeOrigin: true,
    pathRewrite: {
      "^/dev": ""
    }
  },

  "/pro": {
    target: "https://show.cool-admin.com",
    changeOrigin: true,
    pathRewrite: {
      "^/pro": "/api"
    }
  }
};

module.exports = {
  devServer: {
    port: 9000,
    open: false,
    compress: false,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true,
    proxy: PROXY_LIST
  },

  css: {
    extract: isProduction, // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
    sourceMap: false
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/less/theme.less'),
        path.resolve(__dirname, './src/assets/less/utils.less'),
        path.resolve(__dirname, './src/assets/less/reset.less')
      ]
    }
  },

  chainWebpack: config => {

    // alias 别名
    config.resolve.alias
      .set('@', resolve('src'))

    // 生产模式下
    if (isProduction) {
      // 移除 prefetch 插件
      config.plugins.delete("prefetch");

      // 移除 preload 插件，避免加载多余的资源
      config.plugins.delete("preload");

      config.optimization.minimizer("terser").tap(args => {
        // 去掉注释
        args[0].terserOptions.output = {
          comments: false
        };
        return args;
      });

      // 分割模块
      config.optimization.splitChunks({
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 300000,
        automaticNameDelimiter: "-",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `chunk.${packageName.replace("@", "")}`;
            },
            priority: 10
          }
        }
      });
    }
  },

  configureWebpack: config => {
    // 构建缓存
    config.plugins.push(new HardSourceWebpackPlugin());
  }
}