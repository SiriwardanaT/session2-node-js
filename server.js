const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
const Usermodal = require('./src/modals/UserModal')
const autherModal = require('./src/modals/author')
const bookModal = require('./src/modals/book')



//database connection
 mongoose.connect('mongodb://localhost:27017/session2',()=>{
     console.log("Database Connected")
});


// //POST :/create
// app.post('/createUser' , (req , res)=>{
   
//     Usermodal.create(req.body).then((user)=>{
//         res.send(user)

//     }).catch((err)=>{
//         console.log(err);
//         res.send("error")
//     });

// });

// //find a user
// app.get('/:id' , (req , res)=>{
//     console.log(req)
//     Usermodal.findOne({_id:req.params.id}).then((user)=>{
//          res.send(user)

//     }).catch((err)=>{
//         console.log(err)
//         res.send("err")
//     })
// })

// //get all users
// app.get('/' , (req , res)=>{
  
//     Usermodal.find().then((users)=>{
//         res.send(users)


//     }).catch((err)=>{
//         console.log(err)
//         res.send("err")
//     })

// })

// //delete
// app.delete('/:id',(req,res)=>{
//     Usermodal.deleteOne({_id:req.params.id}).then((user)=>{
//         console.log(user)
//         res.send("deleted "+req.params.id);
//     }).catch((err)=>{
//         console.log(err)
//         res.send("err")
//     })
// })

// //upfated
// app.put('/:id', (req ,res)=>{
//     Usermodal.updateOne({_id:req.params.id}, {$set:{email:req.body.email , password:req.body.password}})
//     .then((updated)=>{
//            res.send(updated)     
//     }).catch((err)=>{
//         console.log(err)
//         res.send("err")
//     })
// })

// //==================================== one to many ================================ //

// app.post('/createAuthor' , async (req , res)=>{
    
//      const createAuthor = await autherModal.create(req.body);
//      if(createAuthor){
//          res.send(createAuthor)
//      }
//      else{
//         res.send("error")
//      }

  
// })

// app.post('/addBook' ,async(req , res)=>{
    
//     const Createdbook = await book.create({"Bookname":req.body.Bookname});
//     const getauthor = await autherModal.findByIdAndUpdate(req.body.authorId,{$push:{books:Createdbook._id}});

//     const findUpdatedModal = await autherModal.findOne({_id:req.body.authorId});

//     if(findUpdatedModal){
//         res.send(findUpdatedModal)
//     }
//     else{
//         res.send("no data found")
//     }


// })

app.post('/addAuthor' ,async (req , res)=>{

        const author = await autherModal.create(req.body);

        if(author){
            res.send(author)
        }
  

})

// app.post('/addBook' ,async (req , res)=>{

//     try{
//         const authorId = req.body.authorId;
//         const Bookname = req.body.Bookname;
    
//         //create book
//         const createdBook = await bookModal.create({"Bookname":Bookname});
    
//         //find autor and update schama
//         const updatedAuthor = await autherModal.findByIdAndUpdate(authorId,{$push:{"books":createdBook._id}});
        
//         const author = autherModal.findOne({_id:updatedAuthor._id});
//         res.send(author);

//     }catch(err){
//         console.log(err);
//     }
     

// })



//========================  Server  ================== //
app.listen('4000',()=>{
    console.log("Server running on port 4000")
})


