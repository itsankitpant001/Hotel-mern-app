const mongoose=require('mongoose')
const express=require('express')
const router=express.Router();
const menuschema=require('../modals/menushema');


router.post('//menu',async(req,res)=>{
   try {
    const menuitem=req.body;
    const newmenu=new menuschema(menuitem);
    const response=await newmenu.save();
    console.log("Menu Added",response)
        res.status(200).json(response)
    
   } catch (error) {
    console.log(error)
    res.status(500).json(error);
    
   }

})
router.get('//menu',async(req,res)=>{
   try {
      const response=await menuschema.find();
      console.log("Menu Fetched",response)
      res.status(200).json(response)
      
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
      
   }

})
router.patch("//menu/:id",async(req,res)=>{
   try {
      const menuid=req.params.id;
   const updatedmenu=req.body;
   const response=await menuschema.findByIdAndUpdate(menuid,updatedmenu,{
      new:true,
      runValidators:true
   })
   if(!response){
      res.status(404).json({error:"Menu Not Found"})
   }
   console.log("Menu Item Updated",response)
   res.status(200).json(response)
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
   }
})
router.delete("//menu/:id",async(req,res)=>{
   try {
      const menuid=req.params.id;
   const response=await menuschema.findByIdAndDelete(menuid)
   if(!response){
      res.status(404).json({error:'Menu Not Found'})
   }
   console.log("Menu Item Deleted",response)
   res.status(200).json(response)
   } catch (error) {
      console.log(error)
      res.status(500).json(error);  
   }
})


router.get('//menu/:id',async(req,res)=>{
   try {
      const id=req.params.id;
   
      const response=await menuschema.findById({_id:id})
      if(response){
         console.log(response)
      res.status(200).json(response)
      }
   
   } catch (error) {
      console.log(error)
      res.status(500).json(error)
      
   }
})
module.exports=router;