import express from 'express';
import Data from '../data/data.js';

const router = express.Router();

router.get('/all', async (req,res) => {
    const data = await Data.find();
    return res.status(200).send(data);
});

router.post('/add', async (req,res) => {
    try {
        const data = await Data.create(req.body);
        return res.status(200).send(data);
    } catch(err){
        return res.status(400).send(err)
    }
    
});


export default router;