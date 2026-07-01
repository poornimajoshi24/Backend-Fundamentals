const mongoose=require("mongoose")
const noteSchema=new mongoose.Schema({//tells ki database k data ka format kaisa hoga and hence a schema is created for notes collection in database
    title:String, 
    description:String,
    age:Number
})
//but database mein crud operations perform karne ke liye humein schema ki help se model create karna padta hai jisse hum database ke saath interact kar sakein
const noteModel=mongoose.model("notes",noteSchema)//this line tells ki ek collection hogi jiska naam hoga "notes" aur uss collection k andar saare notes ka data store hota hai and hence a model is created for notes collection in database



//hence schema is fo roperations but for crud operations we need to create a model using the schema and hence the model is created using the schema and then exported to be used in other files

module.exports=noteModel;