const express = require('express');
const MenuRouter = express.Router();


const {createMenu,getallMenu,getOneMenu,UpdateMenu,deleteMenu} = require('../Controllers/menu');

MenuRouter.post('/create', createMenu);
MenuRouter.get('/getall',getallMenu);
MenuRouter.get('/get/:id',getOneMenu);
MenuRouter.put('/update/:id',UpdateMenu)
MenuRouter.delete('/delete/:id',deleteMenu)


module.exports = MenuRouter