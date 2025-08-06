const express = require('express');
const ContatusRouter = express.Router();


const {createContatus,getallContatus,getOneContatus,UpdateContatus,deleteContatus} = require('../Controllers/contatus.js');

ContatusRouter.post('/create', createContatus);
ContatusRouter.get('/getall',getallContatus);
ContatusRouter.get('/get/:id',getOneContatus);
ContatusRouter.put('/update/:id',UpdateContatus)
ContatusRouter.delete('/delete/:id',deleteContatus)


module.exports = ContatusRouter