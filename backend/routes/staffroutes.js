const mongoose=require('mongoose')
const express=require('express')
const router=express.Router();
const staffschema=require('../modals/staffschema')

router.post('/',async(req,res)=>{
    try {
        const data=req.body
        const newperson= new staffschema(data);
        const response=await newperson.save();
        console.log('data saved')
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal Server Error'})  
    }
})

router.get('/',async(req,res)=>{
   try {
    const response=await staffschema.find();
    res.status(200).json(response);
    console.log(response)
   } catch (error) {
    console.log(error)
    res.status(500).json(error)
    
   }
})
router.get('/staff/:worktype',async (req,res)=>{
   try {
    const worktype=req.params.worktype;
    if(worktype=='chef'|| worktype=='waiter'|| worktype=='manager'){
        const response=await staffschema.find({work:worktype})
        console.log(response)
        res.status(200).json(response)
    }
    else {
        res.status(404).json({error:'invalid work type'})
    }
    
   } catch (error) {
    console.log(error)
    res.status(500).json(error)
    
   }
})
router.get('/:id',async (req,res)=>{
    try {
     const id=req.params.id;
         const response=await staffschema.findById({_id:id})
         console.log(response)
         res.status(200).json(response)
     if(!response) {
         res.status(404).json({error:'Staff Not Available'})
     }
    } catch (error) {
     console.log(error)
     res.status(500).json(error)
    }
 })
router.patch('/:id',async (req,res)=>{
    try {
        const personid=req.params.id;
    const updateduser=req.body;
    const response=await staffschema.findByIdAndUpdate(personid,updateduser,{
        new:true,
        runValidators:true,
    })
    if(!response){
        res.status(404).json({error:"Data Not Found"})
    }
    console.log("data-updated",response)
    res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(5000).json(error)
        
    }


})
router.delete('/:id',async(req,res)=>{
    try {
        const personid=req.params.id;
    const response=await staffschema.findByIdAndDelete(personid)
    if(!response){
        res.status(404).json({error:"Data Not Found"})
    }
    console.log("Date Deleted",response)
    res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }
})
module.exports=router;