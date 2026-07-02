// main kaam is to create server by 
const express=require("express")//step1

const app=express()//step 2
const noteModel=require("./models/note.model")//step 22
app.use(express.json())//step 21



/**
 * -POST/api/notes where name of API is /api/notes
 * -create new note and save data in mongodb
 * -req.body={title, description}
 * 
 */
app.post("/api/notes",async(req,res)=>{//step 19
    const{title, description}=req.body

    const note =await noteModel.create({//step 23
        title,
        description
    })
    res.status(201).json({//step 24
        message:"note created successfully",
        note
    })
})




/**
 * -GET /api/notes
 * -fetch all the notes data from mongodb and send them in the response 
 *  
 */
// very important- find method data ko array of object ki form mein return karti hai 
app.get("/api/notes",async(req,res)=>{//step 25
    const notes=await noteModel.find()
    res.status(200).json({
        message:"notes fetched successfully ",
        notes
    })
})














/**
 * -DELETE /api/note/:id
 * -delete the note from mongodb by id and send the deleted note in the response
 */
app.delete("/api/note/:id",async(req,res)=>{
    const id= req.params.id


    await noteModel.findByIdAndDelete(id)

    console.log(id)

    res.status(200).json({
        message:"note deleted successfully"
    })

})




module.exports=app//step 3`