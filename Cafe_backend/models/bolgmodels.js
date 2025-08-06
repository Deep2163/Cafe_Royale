const mongoose = require('mongoose');

const bolgSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    authorName:{
        type: String,
    },
    discription: {
        type: String,
    },
    image:{
        type: String,
    }
},{
    timestamps : true
});

const Blog = mongoose.model('Blog',bolgSchema);

module.exports = Blog;
