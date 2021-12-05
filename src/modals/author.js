const mongoose = require('mongoose');

const autherScheama = new mongoose.Schema({
    
    "name":{
        type:String,
        required:true
    },
    "books":[{
        type:mongoose.Types.ObjectId,
        ref:"books"
     }]
 
})
module.exports = mongoose.model('auther',autherScheama);