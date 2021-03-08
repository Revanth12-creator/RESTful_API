const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Profile=new Schema({
   firstname:{
        type:"String",
        required:true,
    },
    lastname:{
        type:"String",
        required:true,
    },
    designation:{
        type:"String",
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
}) 
module.exports=mongoose.model("EMP_Profile",Profile);