const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const staffroutes=require("./routes/staffroutes")
const menuroutes=require("./routes/menuroutes")
app.use(express.json());



const cors=require('cors')
app.use(cors());

mongoose.connect(process.env.URI).then(()=>{
    console.log("Hotel Server Connected")
    app.listen(process.env.PORT||6000,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Port Successfully Running ON ", process.env.PORT);
            
        }
    })
}).catch((error)=>{
    console.log(error)
})

app.use(staffroutes)
app.use(menuroutes)
 




