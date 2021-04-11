import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const MONGOURI = process.env.MONGODB_URI;

const connectDB = async () => {
    await mongoose.connect(MONGOURI,{ 
        useUnifiedTopology: true, 
        useNewUrlParser: true });
    console.log('db connected..');
};

export default connectDB;