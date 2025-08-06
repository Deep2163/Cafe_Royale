const express = require('express');
const blogRouter = express.Router();

const {createBlog, getAllBlog, getOneBlog, UpdateBlog, deleteBlog} = require('../Controllers/blogcontrollers');

const multer = require('multer');

// Configure Multer for File Uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images'); 
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

blogRouter.post('/create',upload.single('imagename'),createBlog);
blogRouter.get('/getAll',getAllBlog);
blogRouter.get('/get/:id',getOneBlog);
blogRouter.put('/update/:id',UpdateBlog);
blogRouter.delete('/delete/:id',deleteBlog);

module.exports = blogRouter