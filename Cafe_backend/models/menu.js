const mongoose = require('mongoose')

const MenuSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
},{
    timeseries : true
})


const Menu = mongoose.model('menu',MenuSchema);

module.exports = Menu;