const mongoose =require('mongoose');
const jwt =require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required:true
    },
    email :{
        type: String,
        required:true
    },
    phone :{
        type: Number,
        required:true
    },
    work :{
        type: String,
        required:true
    },
    password :{
        type: String,
        required:true
    },
    cpassword :{
        type: String,
        required:true
    },
    tokens:[
        {
            token: {
                type: String,
                required:true
            }
        }
    ]
})



//hashing the password as midleware before save methode
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        //console.log("we are inside");
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
        //console.log(this.password);
    }
    next();
});

//we are genrating token
userSchema.methods.generateAuthToken = async function(){
    try{
        //for token generation
        let tokenGot = jwt.sign({_id:this._id},process.env.SECRET_KEY);//SECRET_KEY must be min. of 32 character
        //adding token to doccument
        this.tokens = this.tokens.concat({token:tokenGot});
        //after updating the doccument we need to save
        await this.save();
        //for useing genrated token we neeed to return thr token
        return tokenGot;
    }catch(err){
        console.log(err);
    }
}

const User = mongoose.model('USER',userSchema);
module.exports = User;