const express = require('express');
const ChefRouter = express.Router();


const {createChef,getAllchef,deleteChef} = require('../Controllers/chef');

const multer = require('multer');

// Configure Multer for File Uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images'); 
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

ChefRouter.post('/create',upload.single('imagename'), createChef);
ChefRouter.get('/getall',getAllchef);
ChefRouter.delete('/delete/:id',deleteChef);


module.exports = ChefRouter