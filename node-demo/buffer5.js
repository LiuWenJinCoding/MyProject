    //拷贝缓冲区 buf.copy(targetBuffer[,targetStart[,sourceStart[, sourceEnd]]]);

    var buf1 = Buffer.from('abcd');
    var buf2 = Buffer.from('ABcc');
    
    //将buf2 插入到buf1 指定位置上
    buf2.copy(buf1, 2);

    console.log('buf1', buf1.toString());// abAB