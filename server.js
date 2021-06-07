// 导入node使用的http module
const http = require('http');
// 导入node使用的file system module用于返回给browser的index.html
const fs = require('fs');
// 导入lodash使用提供的method
const _ = require('lodash');

// 新建服务器,里面的callback函数是有browser访问服务器时候执行的操作
// request 对象 -- 访问的浏览器信息
// response 对象 -- 返回给浏览器的信息
const server = http.createServer((request, response) => {

    // lodash提供的utility method的使用

    // const num = _.random(0, 20);
    // console.log(num);
    // // once method用来只执行一次函数
    // const greet = _.once(() => {
    //     console.log('hello');
    // });

    // greet();
    // greet();

    // 查看request object
    console.log(request.url, request.method);

    // 设置返回给浏览器的数据 set header content type
    response.setHeader('Content-Type','text/html');

    // 根据request.url浏览器用户输入，确定server向浏览器返回的html文件
    let path = 'views/';
    switch(request.url){
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        // 将 /about-me 重新redirect到 /about
        case '/about-us':
            response.statusCode = 301;
            response.setHeader('Location','/about');
            response.end();
            break;
        default:
            path += '404.html';
            response.statusCode = 404;
            break;
    }
    
    // send html file
    fs.readFile(path, (error, data) => {
        if(error){
            console.log(error);
            response.end();
        }
        else{
            response.write(data);
            response.end();
        }
    })
    
});
// 服务器对应localhost:3000
server.listen(3000, 'localhost', () => {
    console.log('listenning request on port 3000');
});