const mongoose = require('mongoose');

const Data = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true,
        unique:true,
        lowercase:true
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
})