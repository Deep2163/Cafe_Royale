// const Booktable = require('../models/booktable');
// const User = require('../models/Usermodels');

// // Create a booking
// const createBooktable = async (req, res) => {
//     try {
//         const { phone, people, tblno } = req.body;

//         if ( !phone || !people || !tblno) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
        
//         const booktable = await Booktable.create({ userid : user._id, phone, people, tblno });
//         res.status(201).json({
//             status: 'success',
//             booktable
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: 'fail',
//             error: error.message
//         });
//     }
// };

// //get all booktable
// const getAllbooktable = async (req, res) => {
//     try {
//         const booktable = await Booktable.find().populate('userid' , 'name email');
//         res.status(200).json({
//             status: 'success',
//             booktable
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: 'fail',
//             error: error.message
//         });
//     }
// };

// // Delete a booking
// const deleteBooktable = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const booktable = await Booktable.findByIdAndDelete(id);
//         if (!booktable) {
//             return res.status(404).json({ message: 'Booking not found' });
//         }
//         res.status(200).json({
//             status: 'success',
//             message: 'Booking deleted successfully'
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: 'fail',
//             error: error.message
//         });
//     }
// };

// module.exports = {
//     createBooktable,
//     deleteBooktable,
//     getAllbooktable
// };

const Booktable = require('../models/booktable');
const User = require('../models/Usermodels');

// Create a booking
const createBooktable = async (req, res) => {
    try {
        const { phone, people,bookdate, tblno, Booktime } = req.body;

        // Validation: Ensure all fields are provided
        if (!phone || !people || !tblno || !Booktime || !bookdate) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validate user existence
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        // Create a new booking
        const booktable = await Booktable.create({ 
            userid: user._id, 
            phone, 
            people, 
            tblno, 
            bookdate,
            Booktime 
        });

        res.status(201).json({
            status: 'success',
            booktable
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};

// Get all bookings with user details
const getAllbooktable = async (req, res) => {
    try {
        const booktable = await Booktable.find().populate('userid', 'name email');
        res.status(200).json({
            status: 'success',
            booktable
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};

// Delete a booking
const deleteBooktable = async (req, res) => {
    const { id } = req.params;
    try {
        const booktable = await Booktable.findByIdAndDelete(id);
        if (!booktable) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({
            status: 'success',
            message: 'Booking deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};

// Update a booking
const updateBooktable = async (req, res) => {
    const { bookingId } = req.params;
    try {
        const booktable = await Booktable.findByIdAndUpdate(bookingId, req.body, {
            new: true
        });
        if (!booktable) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({
            status: 'success',
            booktable
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};

//Get Available table and 
const getAvailableTable = async (req, res) => {
    try {
      // Find all bookings with status "Pending"
      const bookedTables = await Booktable.find({ status: { $in: ["Pending", "Accepted"] } });
  
      // Extract table numbers that are already booked
      const unavailableTables = bookedTables.map(item => item.tblno);
  
      // Get all tables from 1 to 15, excluding unavailable ones
      const availableTables = [];
      for (let i = 1; i <= 15; i++) {
        if (!unavailableTables.includes(i)) {
          availableTables.push(i);
        }
      }
  
      res.json({
        message: "Available Tables",
        tables: availableTables,
      });
    } catch (error) {
      console.error("Error getting tables:", error);
      res.status(500).json({ error: "Server Error" });
    }
};

// status update
const updateStatusAccept = async (req, res) => {
    const { id } = req.params;
    try {
        const booktable = await Booktable.findById(id);
        if (!booktable) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        booktable.status = "Accepted";
        await booktable.save();
        res.status(200).json({
            status: 'success',
            booktable
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};

// reject status update
const rejectStatus = async (req, res) => {
    const { id } = req.params;
    try {
        const booktable = await Booktable.findById(id);
        if (!booktable) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        booktable.status = "Rejected";
        await booktable.save();
        res.status(200).json({
            status: 'success',
            booktable
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};


//get table by user id 
const getTableByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const booktable = await Booktable.find({ userid: id }).populate('userid', 'name email');
        if (!booktable) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({
            status: 'success',
            booktable
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
}

module.exports = {
    createBooktable,
    deleteBooktable,
    getAllbooktable,
    updateBooktable,
    getAvailableTable,
    updateStatusAccept,
    rejectStatus,
    getTableByUserId
};
