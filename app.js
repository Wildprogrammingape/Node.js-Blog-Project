// use express framework
const express = require('express');
// third-party middleware(code between http request and response)
const morgan = require('morgan');
// use mongoose API for connecting to MongoDB
const mongoose = require('mongoose');
// import routes
const blogRoutes = require('./routes/blogRoutes');


// express app
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://longchen:19960518@cluster0.rfqyh.mongodb.net/nodeblogs?retryWrites=true&w=majority';
// 第二个参数用来去掉一些warning
// 连接到数据库后再listen端口3000的request
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000));

// view engine
app.set('view engine', 'ejs');


// listen for browser request
// app.listen(3000);

// use static middleware for access file
app.use(express.static('public'));
// use morgan middleware for log
app.use(morgan('dev'));
// 用来从web form前端传递数据 for post request
app.use(express.urlencoded({extended: true}));


// 所有的 GET Request:
// listen for get request
app.get('/', (request, response) => {
    response.redirect('/blogs');
});

app.get('/about', (request, response) => {  
    response.render('about', {title: 'About'})
});

// blog routes
// 将所有的GET POST DELETE的route都放在blogRoutes里了
app.use(blogRoutes);


// 404 page
//app.use()只在代码执行到这里时触发,所以必须写在底部
app.use((request, response) => {
    response.render('404', {title: '404'});
});