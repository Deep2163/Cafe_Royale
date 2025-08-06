const Blog = require('../models/bolgmodels.js');

// create
const  createBlog = async (req, res) => {
    try{
        const{discription,title,authorName}=req.body;
        const imagename = req.file.filename;

        

        if(!title || !discription || !authorName || !imagename){
            return res.status(404).json({message: 'All fields are required'});
        }


        const image = `images/${imagename}`

        const blog = await Blog.create({title,authorName,discription,image});
        res.status(200).json({
            status : 'success',
            blog
        });
    }catch(error){
        res.status(401).json({
            status: 'fail',
            error: error.message
        });
    }
};

// Get All
const getAllBlog = async (req, res) => {
    try{
        const blog = await Blog.find();

        if(blog.length === 0){
            return res.status(404).json({message: 'no blog found'});
        }

        res.status(200).json({
            status: 'success',
            blog
        });
    }catch(error){
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}

// Get one
const getOneBlog = async (req, res) =>{
    try{
        const { id } = req.params;
        const blog = await Blog.findById(id);

        if(!blog){
            return res.status(404).json({message: 'no blog found'});
        }

        res.status(200).json({
            status: 'succes',
            blog
        })
    }catch(error){
        res.status(404).json({
            status: 'fail',
            error: error.message
        });
    }
}

// Update
const UpdateBlog = async (req, res) => {

    const {id} = req.params;
    try{
        const blog = await Blog.findByIdAndUpdate(id, req.body,{
            new:true,
        });
        res.status(201).json({
            status: 'succes',
            blog
        })
    }catch(error){
        res.status(404).json({
            status: 'fail',
            error: error.message
        });
    }
}

// delete
const deleteBlog = async (req, res) => {

    const {id} = req.params;
    try{
        const blog = await Blog.findByIdAndDelete(id, req.body,{
            new:true,
        });
        res.status(200).json({
            status: 'succes',
            blog
        })
    }catch(error){
        res.status(404).json({
            status: 'fail',
            error: error.message
        });
    }
}

module.exports = {
    createBlog,
    getAllBlog,
    getOneBlog,
    UpdateBlog,
    deleteBlog
}