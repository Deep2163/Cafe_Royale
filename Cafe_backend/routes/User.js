const express = require('express');
const UserRouter = express.Router();

const {createUser, getallUser, getOneUser, UpdateUser,deleteUser, login} = require('../Controllers/Usercontrollers');

UserRouter.post('/create',createUser);
UserRouter.get('/getAll',getallUser);
UserRouter.get('/get/:id',getOneUser);
UserRouter.put('/update/:id',UpdateUser)
UserRouter.delete('/delete/:id',deleteUser)
UserRouter.post('/login', login)

module.exports = UserRouter