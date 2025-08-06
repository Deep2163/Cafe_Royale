const mongoose = require('mongoose')

const ChefSchema =new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phonenumber:{
        type:String,
    },
    Image:{
        type:String,
    },
    Role:{
        type:String
    }
},{
    timeseries : true
})


const Chef = mongoose.model('chef',ChefSchema);

module.exports = Chef;