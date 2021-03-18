import express from 'express'
import connectDB from './database/database.js'
import cors from 'cors'
import router from './controllers/controller.js'

const app = express();

app.use(cors());
app.use(express.json({ extended : false }));
app.use('/api',router);

connectDB();
app.listen(3000);