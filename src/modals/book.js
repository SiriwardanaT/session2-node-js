const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    
    "Bookname":{
        type:String,
        required:true
    }
    
    



})
module.exports = mongoose.model('books',bookSchema);