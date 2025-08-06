const { request } = require('express');
const User = require('../models/Usermodels.js');
const e = require('express');


//create
const createUser = async(req,res) =>{
    try{
        const{email, password, name , phonenumber }= req.body;
        if(!email || !password){
            return res.status(404).json({message: 'all fields are required'});
        }

        const oldUser = await User.findOne({email: email})
        if (oldUser) {
            return res.status(409).json({message: 'User Allreday exist , tray to Login'});
        }
       
        const user = await User.create({email,password , name , phonenumber});
        res.status(201).json({
            status:'succes',
            user
        })
    }catch(error){
        res.status(404).json({
            status:'fail', 
            error:error.message
        });
    }
};

const login = async (req, res) => {
    try {
        
        const{email, password }= req.body;
        if(!email || !password){
            return res.status(404).json({message: 'all fields are required'});
        }

        const oldUser = await User.findOne({email: email})
        if (!oldUser) {
            return res.status(409).json({message: 'Wrong Email or Password'});
        }

        if (oldUser.password !== password) {
            return res.status(403).json({message: 'Wrong password'});
        }

        res.status(201).json({
            status:'succes',
            message: "user login successfully",
            oldUser
        })
    } catch (error) {
        res.status(404).json({
            status:'fail', 
            error:error.message
        });
    }
}


// GetAll
const getallUser = async(req,res) =>{
    try{
        const user = await User.find();
        console.log(User.length);

        if(User.length ===0){
            return res.status(404).json({message: 'no user found'})
        }
        res.status(201).json({
            status:'succes',
            user
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
};


// Get One
const getOneUser = async(req,res)=>{
    try{
        const { id } = req.params;
        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({message: 'no User found'});
        }

        res.status(201).json({
            status:'success',
            user
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
};

// Update
const UpdateUser = async(req, res) =>{

    const { id } = req.params;
    try{
        const user = await User.findByIdAndUpdate(id, req.body,{
            new:true,
        });

        if (req.body.currentPassword || req.body.newPassword) {
            if (req.body.currentPassword === user.password) {
                    user.password = req.body.newPassword;
                    user.save();
            } else {
                return res.status(403).json({message: 'Current Password is not correct'});
            }
        }

        res.status(201).json({
            status:'succes',
            user
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
};


// delete 
const deleteUser = async(req,res) =>{

    const { id } = req.params;
    try{
        const user = await User.findOneAndDelete(id, req.body,{
            new:true,
        });
        res.status(201).json({
            status: 'succes',
            user
        });
    }catch(error){
        res.status(404).json({
            status:'fail',
            error:error.message
        });
    }
}

module.exports ={
    createUser,
    getallUser,
    getOneUser,
    UpdateUser,
    deleteUser,
    login
}