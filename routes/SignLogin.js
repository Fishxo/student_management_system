const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// creating a monoose schema and model 
const signSchema = mongoose.Schema({
    firstName : String,
    secondName : String, 
    age : Number,
    email : String,
    username : String,
    password : String 
})


// creating a model here 

const signModel = mongoose.model('signin_info',signSchema);

//using a models to save into database
router.post('/signnnup', async(req,res)=>{
    const {firstName,secondName,age,email,password} = req.body;

    const stu = new signModel({
        firstName,secondName,age,email,password
    })
     try{
        await stu.save();
        res.send('you have successfully registerd');
     }catch(error){
        console.log(error);
        res.send('sorry could not register');
     }
     
})

router.get('/',(req,res)=>{
    res.render('SignLogin')
})

module.exports = router;