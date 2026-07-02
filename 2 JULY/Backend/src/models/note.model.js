const mongoose=require("mongoose") //step 16

const noteSchema=new mongoose.Schema({//step 17
    title:String, 
    description:String,
})

//note k data to create, read, delete or update karne k liye we use model 
const noteModel=mongoose.model("thisIsNameOfCollection",noteSchema)//step 18 

module.exports=noteModel//step 20