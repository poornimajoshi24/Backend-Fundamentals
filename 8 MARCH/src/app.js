const express = require("express");

const app = express();
app.use(express.json()); //yeh middleware hai jo hume req.body k andar data dega jab bhi hmaari request aayegi

const notes = [];
//jab bhi iss route ya API pe hmaari request aayegi toh req.body k andar jo bhi data hoga vpo sonsole ho jayega
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "note created successfully",
  });
});

//client jab bhi iss api pe request karega toh hmaari notes array k andar jo bhi data hoga vpo client ko mil jayega
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes retrieved successfully",
    data: notes,
  });
});

app.delete("/notes/:mama", (req, res) => {
  delete notes[req.params.mama];
  res.status(204).json({
    message: "note deleted successfully",
  });
});

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index]=req.body.description
    res.status(200).json({
        message:"note updated successfully"
    })
})

module.exports = app;
