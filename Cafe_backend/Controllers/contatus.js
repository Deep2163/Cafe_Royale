const { request } = require('express');
const Contatus = require('../models/contatus.js');

//create

const createContatus = async(req,res) =>{
    try{
        const{email, message , phonenumber ,name }= req.body;
        if(!email || !message || !phonenumber || !name){
            return res.status(404).json({message: 'all fields are required'});
        }
        const contatus = await Contatus.create({email,message, phonenumber, name});
        res.status(201).json({
            status:'succes',
            contatus
        })
    }catch(error){
        res.status(404).json({
            status:'fail', 
            error:error.message
        });
    }
};

// GetAll
const getallContatus = async(req,res) =>{
    try{
        const contatus = await Contatus.find();
        console.log(Contatus.length);

        if(contatus.length ===0){
            return res.status(404).json({message: 'no user found'})
        }
        res.status(201).json({
            status:'succes',
            contatus
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
};

// Get One
const getOneContatus = async(req,res)=>{
    try{
        const { id } = req.params;
        const contatus = await Contatus.findById(id);

        if(!contatus){
            return res.status(404).json({message: 'no User found'});
        }

        res.status(201).json({
            status:'success',
            contatus
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
};

// Update
const UpdateContatus = async(req, res) =>{

    const { id } = req.params;
    try{
        const contatus = await Contatus.findByIdAndUpdate(id, req.body,{
            new:true,
        });
        res.status(201).json({
            status:'succes',
            contatus
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
};


// delete 
const deleteContatus = async(req,res) =>{

    const { id } = req.params;
    try{
        const contatus = await Contatus.findByIdAndDelete(id);
        res.status(201).json({
            status: 'succes',
            contatus
        });
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
}


module.exports = {
    createContatus,
    getallContatus,
    getOneContatus, 
    UpdateContatus,
    deleteContatus 
}