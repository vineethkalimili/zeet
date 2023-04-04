const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// Get all Datas
router.get('/', async(req,res) =>{
    try{
        const datas = await Data.find();
        res.json(datas);
    }catch(err){
        res.json({message : err});
}
});

// Get specific Data
router.get('/:datauserWalletAddress',async(req,res) =>{
    try{
        const data = await Data.findOne({userWalletAddress:req.params.datauserWalletAddress});
        res.json(data)
    }catch(err) {
        res.json({message: err})
    };
});


// Submit Data
router.post('/', async(req,res)=>{
    const data = new Data({
        userWalletAddress:req.body.userWalletAddress,
        userName:req.body.userName
        
    });
    try{
    const savedData = await data.save()
    res.json(savedData);
    }catch(err){
        res.json({message : err});
    }
});

// Delete Data
router.delete('/:dataId', async(req,res) =>{
    try{
        const removedData = await Data.findByIdAndRemove({_id: req.params.dataId});
        res.json(removedData);
    }catch(err) {
        res.json({message: err});
    }
});

// Update Data
router.patch('/:dataId', async(req,res) =>{
    try{
        const updatedData = await Data.updateOne(
            {_id: req.params.dataId},
            {$set:{KYCStatus: req.body.KYCStatus,
                AMLStatus:req.body.AMLStatus}});
            res.json(updatedData);
    }catch(err) {
        res.json({message:err});
    }
})

module.exports =router;