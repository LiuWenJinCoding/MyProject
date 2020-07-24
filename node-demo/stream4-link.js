//链式流
//链式是通过连接输出流到另外一个流并创建多个流操作链的机制. 链式流一般用于管道操作
//下面使用管道和链式来进行压缩和解压文件
var fs = require("fs");
var zlib = require('zlib');

//压缩input.txt 文件为input.txt.gz
// fs.createReadStream('./input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
// console.log('文件压缩完成。');

//解压：
fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input2.txt'));
console.log('文件解压完成。');