const mongoose = require('mongoose')

const ContatusSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phonenumber:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
},{
    timeseries : true
})


const Contatus = mongoose.model('contatus',ContatusSchema);

module.exports = Contatus;