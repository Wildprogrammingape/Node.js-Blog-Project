// node的主要用途用来帮助JS操作file,如 读 写 删除文件
// node自带的mudule, 名为fs，用来操作file

const fs = require('fs');

// read files
// fs.readFile(path, callback) 是一个async函数
// 返回的data默认为buffer格式，可以用data.toString()转换

// fs.readFile('docs/blog1.txt', (error, data) => {
//     if (error){
//         console.log(error);
//     }
//     console.log(data.toString());
// });


// write files
// fs.writeFile(path, 'text you want to write', callback)

// fs.writeFile('docs/blog1.txt', 'hello world', () => {
//     console.log('file was written');
// });


// directories
// fs.mkdir(path, callback) 用来新建一个文件

// fs.mkdir('assets', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('folder created');
// });


// delete files
if (fs.existsSync('docs/deleteme.txt')){
    fs.unlink('docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}