const ctx = require.context('./modules/', true, /\.ts/)
let modules: any = {}

ctx.keys().forEach(key => {
  let name = key.replace(/(^\.\/|\.ts$)/g, ''); // 去后缀
  name = name.substr(0, 1).toLowerCase() + name.substr(1); // 首字母小写
  modules[name] = ctx(key).default;
});

// console.log('模块打印', modules)
export default modules