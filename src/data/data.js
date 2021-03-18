import mongoose from 'mongoose'

const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Data = mongoose.model('Data',DataSchema); 

export default Data;