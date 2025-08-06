// const mongoose = require('mongoose')

// const BooktableSchema =new mongoose.Schema({
//     userid:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     phone:{
//         type:String,
//     },
//     people:{
//         type:Number,
//     },
//     tblno:{
//         type:Number,
//     },
//     Booktime:{
//         type:Date,
//     }
// },{
//     timestamps : true
// })


// const Booktable = mongoose.model('Booktable',BooktableSchema);

// module.exports = Booktable;


const e = require('express');
const mongoose = require('mongoose');

const BooktableSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    phone: {
        type: String,
        match: /^[0-9]{10}$/  // Ensure phone number is 10 digits
    },
    people: {
        type: Number,
        min: 1  // Ensure at least 1 person is booked
    },
    tblno: {
        type: Number,
        min: 1  // Ensure a valid table number is provided
    },
    bookdate: {
        type: String,
    },
    Booktime: {
        type: String,
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending','Canceled', 'Accepted', 'Rejected']
    },
}, { timestamps: true });

const Booktable = mongoose.model('Booktable', BooktableSchema);

module.exports = Booktable;
