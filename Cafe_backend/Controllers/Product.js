const Product = require("../models/Product.js");
const fs = require("fs");
const path = require("path");

// Create Product
const createProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const image = req.file.filename;

    if (!name || !price || !category || !image || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = await Product.create({
      name,
      price,
      category,
      image,
      description,
    });

    // if (!product) {
    //     if (product.image) {
    //         const filePath = path.join(__dirname, '../public/uploads', product.image);
    //         fs.unlinkSync(filePath);
    //     }
    // }

    res.status(201).json({
      status: "success",
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();


    res.status(200).json({
      status: "success",
      products,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

// Get One Product
const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "No product found" });
    }

    res.status(200).json({
      status: "success",
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (req.file) {
      const oldImage = updatedProduct.image;
      const newImage = req.file.filename;
      updatedProduct.image = newImage;
      await updatedProduct.save();

      // delete old image
      if (oldImage !== "default.jpg") {
        const oldImagePath = path.join(__dirname, "../public/images", oldImage);
        fs.unlinkSync(oldImagePath);
      }
    }

    res.status(200).json({
      status: "success",
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const imagePath = path.join(
      __dirname,
      "../public/images",
      deletedProduct.image
    );
    if (deletedProduct.image !== "default.jpg") {
      fs.unlinkSync(imagePath);
    }

    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

//Update Status
const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      status: "success",
    });

  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
 
};

const findProductByCategory = async (req, res) => {
  try {
    const { category } = req.query; // Changed from req.body to req.query
    const products = await Product.find({ category: category });
    res.status(200).json({
      status: "success",
      products,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  updateStatus,
  findProductByCategory
};
