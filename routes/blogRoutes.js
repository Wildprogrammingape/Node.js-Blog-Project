// 将所有Express Routes放到这里，增加代码简洁性

// 使用express框架
const express = require('express');
// import model named 'Blog', 这样Blog就是有schema的对象，用来创建新blog
const Blog = require('../models/blog');
// 使用 express router
const router = express.Router();


// 将所有的app.get()换成router.get()

router.get('/blogs', (request, response) => {
    // model.find() 来显示数据库中该model的所有数据，是个asyc function
    // sort({createdAt: -1})按照时间排序
    Blog.find().sort({createdAt: -1})
    .then((result) => response.render('index', {title: 'All Blogs', blogs: result}))
    .catch(error => console.log(error));
});

router.get('/blogs/create', (request, response) => {
    response.render('create', {title: 'Create'});
});

// GET with id
router.get('/blogs/:id', (request, response) => {
    // 拿到用户数据的endpoint id
    const id = request.params.id;
    Blog.findById(id)
    .then((result) => {
        response.render('details', {blog: result, title: 'Blog details'})
    })
    .catch(error => response.render('404', {title: '404'}));
});

// POST Request
router.post('/blogs', (request, response) => {
    // 创建新model对象，内容为request.body，保存到blog变量中
    const blog = new Blog(request.body);
    // 保存到数据库
    blog.save()
    .then((result) =>  {
        response.redirect('/blogs');
    })
    .catch(error => console.log(error));
});

// DELETE Request
router.delete('/blogs/:id', (request, response) => {
    const id = request.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        response.json({redirect: '/blogs'})
    })
    .catch(error => console.log(error));
});

// 导出这些router，然后导入到app中
module.exports = router;
