const express = require('express');
const AdminRouter = express.Router();

const {createAdmin, login , UpdateAdmin, getAdmin, dashboard} = require('../Controllers/adminController');

AdminRouter.post('/create',createAdmin);
AdminRouter.post('/login', login);
AdminRouter.put('/update/:id',UpdateAdmin);
AdminRouter.get('/get/:id',getAdmin);
AdminRouter.get('/dashboard',dashboard);

module.exports = AdminRouter