const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    userWalletAddress:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    }
    
    }
)

module.exports = mongoose.model('Datas',dataSchema);