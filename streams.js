// stream 用于操作大型文件，每次加载使用一部分buffer缓存，不需要完全加载

const fs = require('fs');

// read stream
const readStream = fs.createReadStream('docs/blog2.txt');
// write stream
const writeStream = fs.createWriteStream('docs/blog3.txt');

// listen to data event (每次收到buffer data时)
// 这样可以实时收到data的一部分

// readStream.on('data', (chunk) => {
//     console.log('---new chunk---');
//     console.log(chunk);
//     // 收到blog2的数据后，写入blog3中
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// pipe 用于传递数据，必须是从可读的 readable stream到可写的 writable stream
// 下面这一行代码作用和上面一样，更简洁
readStream.pipe(writeStream);