const Order = require('../models/order');
const User = require('../models/Usermodels');
const Product = require("../models/Product.js");

//create order
// const createOrder = async (req, res) => {
//     try {
//         const {products} = req.body;

//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         if ( !products ) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         const order = await Order.create({userid : user._id , products });
//         res.status(201).json({
//             status: 'success',
//             order
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: 'fail',
//             error: error.message
//         });
//     }
// };
const createOrder = async (req, res) => {
    try {
        const { products } = req.body;

        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!products || products.length === 0) {
            return res.status(400).json({ message: 'Products are required' });
        }

        let total = 0;
        const updatedProducts = await Promise.all(
            products.map(async (item) => {
                const product = await Product.findById(item.productId);
                if (!product) {
                    throw new Error(`Product with ID ${item.productId} not found`);
                }
                const subtotal = product.price * item.quantity;
                total += subtotal;
                return {
                    productId: item.productId,
                    quantity: item.quantity,
                    subtotal: subtotal
                };
            })
        );

        const order = await Order.create({
            userid: user._id,
            products: updatedProducts,
            total: total
        });

        res.status(201).json({
            status: 'success',
            order
        });

    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};


//get all order
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('userid').populate('products.productId', 'name image price');
        res.status(200).json({
            status: 'success',
            orders
        });

    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};

//get one order
const getOneOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id).populate('userid', 'name email phonenumber');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({
            status: 'success',
            order
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};

//update order
const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { products, total, status } = req.body;

        const order = await Order.findByIdAndUpdate(id, { products, total, status }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({
            status: 'success',
            order
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};

//delete order
const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({
            status: 'success',
            message: 'Order deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};

//Update Status
const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndUpdate(id, { status: req.body.status }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({
            status: 'success',
            order
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};

const getorderByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.find({ userid: id }).populate('products.productId', 'name image price').populate('userid', 'name email phonenumber');
        if (!order) {
            return res.status(404).json({ message: 'order not found' });
        }
        res.status(200).json({
            status: 'success',
            order
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
}

module.exports = { createOrder, getAllOrders, getOneOrder, updateOrder, deleteOrder, updateStatus, getorderByUserId };