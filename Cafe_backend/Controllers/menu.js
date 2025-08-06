const { request } = require('express');
const Menu = require('../models/menu.js');

//create

const createMenu = async(req,res) =>{
    try{
        const{name,price}= req.body;
        if(!name || !price){
            return res.status(404).json({message: 'All fields are required'});
        }
        const menu = await Menu.create({name,price});
        res.status(201).json({
            status:'succes',
            menu
        })
    }catch(error){
        res.status(404).json({
            status:'fail', 
            error:error.message
        });
    }
};

// GetAll
const getallMenu = async(req,res) =>{
    try{
        const menu = await Menu.find();
        console.log(Menu.length);

        if(menu.length ===0){
            return res.status(404).json({message: 'no user found'})
        }
        res.status(201).json({
            status:'succes',
            menu
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
};

// Get One
const getOneMenu = async(req,res)=>{
    try{
        const { id } = req.params;
        const menu = await Menu.findById(id);

        if(!menu){
            return res.status(404).json({message: 'no User found'});
        }

        res.status(201).json({
            status:'success',
            menu
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
};

// Update
const UpdateMenu = async(req, res) =>{

    const { id } = req.params;
    try{
        const menu = await Menu.findByIdAndUpdate(id, req.body,{
            new:true,
        });
        res.status(201).json({
            status:'succes',
            menu
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
};


// delete 
const deleteMenu = async(req,res) =>{

    const { id } = req.params;
    try{
        const menu = await Menu.findOneAndDelete(id, req.body,{
            new:true,
        });
        res.status(201).json({
            status: 'succes',
            menu
        });
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
}


module.exports = {
    createMenu,
    getallMenu,
    getOneMenu, 
    UpdateMenu,
    deleteMenu 
}