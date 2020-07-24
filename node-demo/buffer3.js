//缓冲区合并 Buffer.concat(list[, totaLength]);

var buffer1 = Buffer.from(('cainiao'));
var buffer2 = Buffer.from(('www.cainian.com'));
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer3 内容', buffer3.toString());