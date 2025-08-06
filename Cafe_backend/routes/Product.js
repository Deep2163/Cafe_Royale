const express = require('express');
const ProductRouter = express.Router();
const multer = require('multer');

const { 
    createProduct, 
    getAllProducts, 
    getOneProduct, 
    updateProduct, 
    deleteProduct,
    updateStatus,
    findProductByCategory
} = require('../Controllers/Product');

// Configure Multer for File Uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images'); // Ensure this folder exists
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

// Product Routes
ProductRouter.post('/create', upload.single('image'), createProduct);
ProductRouter.get('/getall', getAllProducts);
ProductRouter.get('/get/:id', getOneProduct);
ProductRouter.put('/update/:id', upload.single('image') ,updateProduct);
ProductRouter.delete('/delete/:id', deleteProduct);
ProductRouter.put('/updateStatus/:id', updateStatus);
ProductRouter.get('/search', findProductByCategory);

module.exports = ProductRouter;
