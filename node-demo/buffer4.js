// 缓冲区比较 buf.compare(otherBuffer)

var buffer1 = Buffer.from('ABCde');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + "在" + buffer2 + "之前");
}else if(result === 0) {
    console.log('===');
}else {
    console.log(buffer1 + '在' + buffer2 + '之后');
}