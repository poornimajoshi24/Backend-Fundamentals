// ye server create aur configure karta hai 

const express=require('express');
const noteModel=require("./models/notes.models")
const app=express()
app.use(express.json())//middleware jo ki request ke body ko json format mein convert kar deta hai taki hum usse easily access kar sakein
app.post("/notes",async(req,res)=>{
    const {title,description}=req.body


    const note=await noteModel.create({
        title, description 
    })
    res.status(201).json({
        message:"note created successfully",
        notes
    })
})
module.exports=app;





// sqblaspiAzE558Ip ankur
