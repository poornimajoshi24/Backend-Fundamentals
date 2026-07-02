const mongoose=require("mongoose")//step 6
function connectToDB(){//step 7
    mongoose.connect(process.env.MONGO_URI)//step 11
    .then(()=>{//step 12
        console.log("connecte to db")
    })
}
module.exports=connectToDB;//step 13 