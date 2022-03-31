const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send('Hello from router.js');
});

//using promisses
// router.post('/register',(req,res)=>{
//     const {name,email,phone,work,password,cpassword} = req.body;
//     //all credentials must be filled
//     if(!name||!email||!phone||!work||!password||!cpassword){
//         return res.status(422).json({error:"please fill all the credentials"});
//     }
//     //checking already exist? using promisses
//     User.findOne({email:email}).then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"email already exist"});
//         }
//         const user = new User({name,email,phone,work,password,cpassword})

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"});
//         }).catch((error)=>res.status(500).json({error:"Failed to register"}));
//     }).catch(err=>{console.log(err);})
// });


//using async-await
router.post('/register',async(req,res)=>{
    const {name,email,phone,work,password,cpassword} = req.body;

    //all credentials must be filled and password hashing using bcryptjs 
    if(!name||!email||!phone||!work||!password||!cpassword){
        return res.status(422).json({error:"please fill all the credentials"});
    }
    try{
            //User must already not exist
            const userExist =await User.findOne({email:email});
            if(userExist){
                return res.status(422).json({error:"email already exist"});
            }else if(password != cpassword){
                return res.status(422).json({error:"password not matching"});
            }else{

                //creating new user
                const user = new User({name,email,phone,work,password,cpassword})
                //saving the new user credential
                await user.save();
                res.status(201).json({message:"user registered successfully"});
            }
            

    }catch(err){
        console.log(err);
    }
    
});

//Login route checking
router.post('/Signin',async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(422).json({error:"please fill all the credientials"});
    }
    try{
        //User  exist or not
        const userLogin =await User.findOne({email:email,});// userLogin contain all credentials of user with given email
        if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password)

        //calling methode to generate the token
        const token = await userLogin.generateAuthToken();
        console.log(token);

        //storing value of token into cookies in browser
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now() + 25892000000),
            httpOnly:true
        });

        if(isMatch){

            res.json({message:"user Signin Successfully"});
        }else{
            res.status(400).json({error:"Invalid User"});
        }
        }else{
            res.status(400).json({error:"Invalid User"});
        }
        

    }catch(err){
        console.log(err);
    }
})


module.exports =router;