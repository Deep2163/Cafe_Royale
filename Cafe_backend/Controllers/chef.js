const { request } = require('express');
const Chef = require('../models/chef');
const fs = require('fs');
const path = require('path');

//create
const createChef = async (req, res) => {
    try {
        const { email, phonenumber, name,Role } = req.body;
        const imagename = req.file.filename; 

        if (!email || !phonenumber || !name || !imagename || !Role) {
            throw new Error('All fields are required');
        }

        const imagePath = `public/images/${imagename}`;
        const imageDbPath = `images/${imagename}`;

        const chef = await Chef.create({ email, Image: imageDbPath, phonenumber, name,Role });

        res.status(201).json({
            status: 'success',
            chef
        });
    } catch (error) {
        if (error) {
            const imagePath = path.join(__dirname, '../public/images', req.file.filename);
            fs.unlink(imagePath, (err) => {
                if (err) console.error('Failed to delete image:', err.message);
            });
        }

        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};

// Get All
const getAllchef = async (req, res) => {
    try{
        const chef = await Chef.find();

        if(chef.length === 0){
            return res.status(404).json({message: 'no chef found'});
        }

        res.status(200).json({
            status: 'success',
            chef
        });
    }catch(error){
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}

// delete 
const deleteChef = async(req,res) =>{

    const { id } = req.params;
    try{
        const chef = await Chef.findByIdAndDelete(id);
        res.status(201).json({
            status: 'succes',
            chef
        });
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
}

module.exports = {
    createChef,
    getAllchef,
    deleteChef
}