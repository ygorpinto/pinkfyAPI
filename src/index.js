const express = require('express');
const connectDB = require('./database/database')

const app = express();

connectDB();

app.use('/api',require('./controllers/controller'))

app.listen(3000);