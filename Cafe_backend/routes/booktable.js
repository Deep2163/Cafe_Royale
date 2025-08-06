const express = require('express');
const BooktableRouter = express.Router();


const {createBooktable,deleteBooktable, getAllbooktable,updateBooktable , getAvailableTable, updateStatusAccept, rejectStatus, getTableByUserId} = require('../Controllers/booktable');

BooktableRouter.post('/create/:id', createBooktable);
BooktableRouter.delete('/delete/:id',deleteBooktable);
BooktableRouter.get('/getAll',getAllbooktable);
BooktableRouter.put('/update/:bookingId',updateBooktable);
BooktableRouter.get('/get/:id',getTableByUserId);
BooktableRouter.get('/getTable',getAvailableTable);
BooktableRouter.put('/accept/:id',updateStatusAccept);
BooktableRouter.put('/reject/:id',rejectStatus)


module.exports = BooktableRouter