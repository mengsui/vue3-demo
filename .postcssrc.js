const path = require('path');

// [h5适配说明链接](https://www.jianshu.com/p/950db8c1002c)
// [vant适配](https://www.cnblogs.com/zhangnan35/p/12682925.html)

module.exports = ({ file }) => {
  const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 828;

  return {
    "plugins": {
      "postcss-px-to-viewport": {
        viewportWidth: designWidth, // (Number) The width of the viewport.
        // viewportHeight: 1280, // (Number) The height of the viewport.
        viewportUnit: 'vw', // (String) Expected units.
        unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
        selectorBlackList: [], // (Array) The selectors to ignore and leave as px. 不需要编译成vw的class名称
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
      },
    }
  }
}
