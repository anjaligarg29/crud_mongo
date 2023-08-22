const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minlength:5,
        maxlength:20
    },

    isAdmin:{
         type: Boolean,
         required: true,
         default: false
    },

    Phone: {
        type: String,
        required:true,
        minlength:5,
        maxlength:10
    },
}));

exports.Customer=Customer;