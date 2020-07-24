//缓冲区裁剪 buf.slice([start[, end]])

var buffer1 = Buffer.from('runoob');
console.log('length ', buffer1.length);

var buffer2 = buffer1.slice(0, 2);
console.log('buffer2 content: ' + buffer2.toString()); 