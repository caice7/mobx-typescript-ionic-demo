const { override, addLessLoader, adjustStyleLoaders, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  // 使用less-loader对源码重的less的变量进行重新制定
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      cssModules: {
        localIdentName: "[path][name]__[local]--[hash:base64:5]",
      }
    },
  }),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),
  //增加路径别名的处理 
  addWebpackAlias({
    '@': path.resolve('./src')
  }),
); 