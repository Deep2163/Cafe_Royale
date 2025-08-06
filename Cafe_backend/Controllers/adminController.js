const Admin = require("../models/admin");
const Blog = require("../models/bolgmodels");
const Booktable = require("../models/booktable");
const Chef = require("../models/chef");
const Contatus = require("../models/contatus");
const Menu = require("../models/menu");
const Order = require("../models/order");
const Product = require("../models/Product");
const User = require("../models/Usermodels");
//create

const createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "all fields are required" });
    }

    const oldAdmin = await Admin.findOne({ email: email });
    if (oldAdmin) {
      return res
        .status(409)
        .json({ message: "User Allreday exist , tray to Login" });
    }

    const admin = await Admin.create({ email, password });
    res.status(201).json({
      status: "succes",
      admin,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "all fields are required" });
    }

    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res.status(409).json({ message: "Wrong Email or Password" });
    }

    if (admin.password !== password) {
      return res.status(403).json({ message: "Wrong password" });
    }

    res.status(201).json({
      status: "succes",
      message: "Admin login successfully",
      admin,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: error.message,
    });
  }
};

// GetAll
// const getallUser = async(req,res) =>{
//     try{
//         const user = await User.find();
//         console.log(User.length);

//         if(User.length ===0){
//             return res.status(404).json({message: 'no user found'})
//         }
//         res.status(201).json({
//             status:'succes',
//             user
//         })
//     }catch(error){
//         res.status(404).json({
//             status:'fail',
//             error:error.message
//         });
//     }
// };

// Get admin
const getAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);

    if (!admin) {
      return res.status(404).json({ message: "no admin found" });
    }

    res.status(201).json({
      status: "success",
      admin,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: error.message,
    });
  }
};

// Update
const UpdateAdmin = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    const admin = await Admin.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(admin.password);

    if (req.body.currentPassword || req.body.newPassword) {
      if (req.body.currentPassword === admin.password) {
        admin.password = req.body.newPassword;
        admin.save();
      } else {
        return res
          .status(403)
          .json({ message: "Current Password is not correct" });
      }
    }

    res.status(201).json({
      status: "succes",
      admin,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: error.message,
    });
  }
};

// // delete
// const deleteUser = async(req,res) =>{

//     const { id } = req.params;
//     try{
//         const user = await User.findOneAndDelete(id, req.body,{
//             new:true,
//         });
//         res.status(201).json({
//             status: 'succes',
//             user
//         });
//     }catch(error){
//         res.status(404).json({
//             status:'fail',
//             error:error.message
//         });
//     }
// }

//dashboard api
const dashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalblog = await Blog.countDocuments();
    const totalOrder = await Order.countDocuments();
    const totalchef = await Chef.countDocuments();
    const totalProduct = await Product.countDocuments();
    const totalBooktable = await Booktable.countDocuments();
    const totalContacts = await Contatus.countDocuments();

    res.status(200).json({
      status: "success",
      data: {
        totalUsers,
        totalblog,
        totalOrder,
        totalchef,
        totalProduct,
        totalBooktable,
        totalContacts
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

module.exports = {
  createAdmin,
  // getallUser,
  getAdmin,
  UpdateAdmin,
  // deleteUser,
  login,
  dashboard,
};
