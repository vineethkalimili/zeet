const bodyParser = require('body-parser');
const express = require('express');
const Price = require('../models/Price');
const router = express.Router();
const Data = require('../models/Data');

// Get all Datas
// router.get('/', async(req,res) =>{
//     try{
//         const prices = await Price.find();
//         res.json(prices);
//     }catch(err){
//         res.json({message : err});
// }
// });



// Submit Data
router.post('/', async(req,res)=>{
    const price = new Price({
        WalletAddress:req.body.WalletAddress,
        KYCStatus:req.body.KYCStatus,
        AMLStatus:req.body.AMLStatus
    });
    try{
    const savedPrice = await price.save()
    res.json(savedPrice);
    }catch(err){
        res.json({message : err});
    }
});

// Get specific Data
router.get('/:priceId',async(req,res) =>{
    try{
        const price = await Price.findOne(req.params.WalletAddress);
        res.json(price)
    }catch(err) {
        res.json({message: err})
    };
});

// Delete Data
router.delete('/:priceId', async(req,res) =>{
    try{
        const removedPrice = await Price.findByIdAndRemove({_id: req.params.priceId});
        res.json(removedPrice);
    }catch(err) {
        res.json({message: err});
    }
});

// Update Data
router.patch('/:priceId', async(req,res) =>{
    try{
        const updatedPrice = await Price.updateOne(
            {_id: req.params.priceId},
            {$set:{KYCStatus: req.body.KYCStatus,
                AMLStatus:req.body.AMLStatus}});
            res.json(updatedPrice);
    }catch(err) {
        res.json({message:err});
    }
})



module.exports =router;