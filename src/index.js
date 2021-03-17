const express = require('express');
const connectDB = require('./database/database')

const app = express();

connectDB();

app.get('/', (req,res)=>{
    res.status(200).send("ok!!");
})

app.listen(3000);