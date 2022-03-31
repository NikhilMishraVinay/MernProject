const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();//now app has all the properties and methods of express

dotenv.config({path: './config.env'});
require('./db/conn');

app.use(express.json());

//we link the router file to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;

//Middleware
const midleware=(req,res,next)=>{
    console.log("midleware");
    next();
}

// app.get('/',(req,res)=>{
//     console.log(`home page`);
//     res.send("hello world welcome to webpage");
// });
app.get('/about',midleware,(req,res)=>{
    console.log(`about page`);
    res.send("welcome to about webpage");
});
app.get('/contact',(req,res)=>{
    res.cookie("Test","Nikhil");
    res.send("welcome to contact webpage");
});
// app.get('/Signin',(req,res)=>{
//     res.send("welcome to login webpage");
// });
// app.get('/Signup',(req,res)=>{
//     res.send("welcome to register webpage");
// });
// app.get('/*',(req,res)=>{
//     res.send(" webpage not found");
// });
app.listen(PORT,()=>{
    console.log(`Server is running  on port number ${PORT}`);
});