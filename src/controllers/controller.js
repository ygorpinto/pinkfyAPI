const express = require('express');

const Data = require('../data/data');

const router = express.Router();


router.get('/', async (req,res) => {
    const data = await Data.find();
    return res.status(200).send(data);
});


module.exports = router;