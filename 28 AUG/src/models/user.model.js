const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,

})

const userModel=mongoose.model("users",userSchema)
//users naam ki colleciton hogi jisemin hmaare users ka data store hog a

//hence schema is created foramt bataan k liye 
//model is craeted to perform any operation on the data in the collection



module.exports=userModel  