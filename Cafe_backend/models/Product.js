const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
       type:String, 
    },
    price:{
        type:Number,
    },
    category:{
        type:String,
    },
    image:{
        type:String,
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        default:'Available',
        enum : ['Available', 'Not Available']
    }
},{
    timestamps: true
})

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;