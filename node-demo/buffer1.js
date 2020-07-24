const { constants } = require("buffer");

const buf1 = Buffer.alloc(10);

const buf2 = Buffer.alloc(10, 1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1, 2, 3]);

const buf5 = Buffer.from('test');

const buf6 = Buffer.from('test', 'latin1');

console.log(buf1, buf2, buf3, buf4, buf5, buf6);


//缓冲区写入数据
buf = Buffer.alloc(256);
len = buf.write('lwj');
console.log('写入字节数：'+ len);

//缓冲区读数据
buf = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 99;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5));


