const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const MONGOURI = process.env.MONGODB_URI;

const connectDB = async () => {
    await mongoose.connect(MONGOURI,{ 
        useUnifiedTopology: true, 
        useNewUrlParser: true });
    console.log('db connected !');
};

module.exports = connectDB;