//Stream 是一个抽象接口， Node中有很多对象实现了这个接口，
//四种类型流：Readable-可读操作 ; Writable-可写操作 ; Duplex-可读可写操作 ; Transform-操作被写入数，然后读出结果。
//所有stream对象都是EventEmitter 的实例。常用的事件有
//data-当有数据可读时触发； end-没有更多数据可读时触发； error-在接收和写入过程中发生错误时触发； finish-所有数据已经被写入到底层系统时触发。

//从流中读取数据
var fs = require('fs');
var data = '';

//创建可读流
var readerStream = fs.createReadStream('./input.txt');

//设置编码为 utf8
readerStream.setEncoding('UTF8');

//处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function() {
    console.log('end ', data);
});

readerStream.on('error', function(err) {
    console.log('err ', err.stack);
})

console.log('program done');