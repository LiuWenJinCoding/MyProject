//写入流
var fs = require('fs');
var data = 'do do do ???';

//使用utf8编码写入数据
var writerStream = fs.createWriteStream('outPut.txt');
writerStream.write(data, 'UTF8');

//标记文件末尾
writerStream.end();

//处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log('写入完成');
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('program done!');