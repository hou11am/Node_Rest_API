const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

//Get All Products
router.get('/',(req,res) =>{
Post.find().then( result => {
    res.json(result);
}).catch(error=>{
    res.json({message: error})
    console.log(error);
})
});

//Get a Spicifec Product
router.get('/:postId',(req,res) =>{
   Post.findById(req.params.postId)
   .then(result => {res.json(result)})
   .catch(error =>{  
    res.json(error);
    console.log(error);
   });
    });

//Post a Product    
router.post('/',(req,res) =>{
    //console.log(req.body)
     const post = new Post({
         name: req.body.name,
         description: req.body.description
     });

     post.save().then(result =>{
         console.log(result)
         res.json(result);
     }).catch(err=> {
         console.log(err)
         res.json({message: "err"})
    });
    });
//Delete a spicific Product 
router.delete('/:productId',(req,res)=>{
    
Post.remove({_id : req.params.productId})
.then(res.json({message : 'The Product has Deleted Succesfully!' }))
.catch(error =>{
res.json({message:error});
})    
}) ;  
//Delete All Product 
router.delete('/',(req,res)=>{
    Post.deleteMany().then(res.json({message : 'All Product has Deleted Succesfully!' })).catch(error =>{
        res.json({message:error});
    })    
    })  
//Update a spessific Product
router.patch('/:productId',(req,res)=>{
    
    Post.updateOne({_id: req.params.productId},{$set : {name: req.body.name , description : req.body.description}})
    .then(res.json({message:'The Product has been updated succesfully'}))
    .catch(error =>{
        res.json({message:error});
    });    
    });      
module.exports = router;