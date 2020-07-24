//global 为node.js中的全局变量：
/**
  global  Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  }
}
 */

var path = require('path');

let start = console.time('get data'); //开始时间

console.log('__filename', __filename); //绝对路径 文件名  __filename F:\MyProject\node-demo\global\main.js

console.log('__dirname', __dirname); //当前执行脚本所在 目录  __dirname F:\MyProject\node-demo\global

console.error('error console');

console.trace(); //向标准错误流输出当前的调用栈

console.dir(console); //用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。

let end = console.timeEnd('get data'); //结束时间

console.info("start end ", start, end); //undefined

console.log('global ', global);

console.log('process', process);

console.log(path.resolve(__dirname, '..'), 'resolve');