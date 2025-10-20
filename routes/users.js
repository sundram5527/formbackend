const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

//routes 
//crud operations
//view and read

router.get('/users', async(req, res) =>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({
                success:false,
                message: err.message
             })
    } 
})

router.post('/users',async(req,res) =>{
    try{
        const{name,email,number,about,issue}= req.body;
        const newUser = new User({name,email,number,about,issue});
        await newUser.save(newUser);
        res.status(200).json({
            success:true,
            user:newUser
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})

module.exports = router;