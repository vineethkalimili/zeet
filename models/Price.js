const mongoose = require('mongoose');

const priceSchema = mongoose.Schema({
    WalletAddress:{
        type:String,
        required:true
    },
    KYCStatus:{
        type:String,
        required:true
    },
    AMLStatus:{
        type:String,
        required:true
    }
    
    
    });
module.exports = mongoose.model('Empdata',priceSchema);



