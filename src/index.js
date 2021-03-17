const express = require('express');
const connectDB = require('./database/database');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ extended : false }));
app.use('/api',require('./controllers/controller'))

connectDB();
app.listen(3000);