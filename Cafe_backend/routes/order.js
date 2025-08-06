const express = require('express');
const OrderRouter = express.Router();

const {createOrder,getAllOrders,getOneOrder,updateOrder,deleteOrder,updateStatus,getorderByUserId} = require('../Controllers/order');

OrderRouter.post('/create/:id', createOrder);
OrderRouter.get('/getAll', getAllOrders);
OrderRouter.get('/get/:id',getOneOrder);
OrderRouter.put('/update/:id',updateOrder);
OrderRouter.delete('/delete/:id',deleteOrder);
OrderRouter.put('/status/:id',updateStatus);
OrderRouter.get('/user/:id',getorderByUserId);


module.exports = OrderRouter;
