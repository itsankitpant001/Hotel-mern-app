const mongoose=require('mongoose')
const staff=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    work:{
        type:String,
        required:true,
        enum:["manager","waiter","chef"]
    },
    age:{
        type:Number,
    },
    salray:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    }

    
},{timestamps:true})
const staffschema=mongoose.model('staffschema',staff);
module.exports=staffschema