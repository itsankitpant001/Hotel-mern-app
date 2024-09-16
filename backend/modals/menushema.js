const mongoose=require('mongoose')
const menu= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
      },
      price:{
        type:Number,
        required:true
    
      },
      ingredients:{
        type:[String],
        default:[]
      },
      taste:{
        type:String,
        enum:['sweet','sour','spicy','mix'],
        required:true
      },
},{timestamps:true})
const menuschema=mongoose.model('menuschema',menu);
module.exports=menuschema;