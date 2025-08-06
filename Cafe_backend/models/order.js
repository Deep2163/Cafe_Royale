const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            },
            subtotal: {
                type: Number,
                default: 0
            }
        }
    ],
    total: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Delivered', 'Cancelled',]
    },
    paymentStatus: {
        type: Boolean,
        default: false,
    }
},{
    timestamps: true
});

const Order = mongoose.model('Order',OrderSchema);

module.exports = Order;
