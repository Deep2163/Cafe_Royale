const express = require('express');
const paymentRouter = express.Router();

const { createOrder, status } = require('../Controllers/paymentController');

paymentRouter.post('/createorder/:id', createOrder);
paymentRouter.post('/status', status);

module.exports =paymentRouter;
