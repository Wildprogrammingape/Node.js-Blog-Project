// 创建blog的schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//定义schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

// Blog是model的名字
const Blog = mongoose.model('Blog', blogSchema)
// 将这个model导出来
module.exports = Blog;