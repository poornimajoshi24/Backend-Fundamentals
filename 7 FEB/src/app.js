//here server is created
// server is configured

const express = require("express");
const app = express(); //step 1-sever is created
app.use(express.json()); //step-6 this is middeware which is used to parse the json data from the request body
//express.json is middleware

const notes = [];
//API 1 POST
app.post("/notes", (req, res) => {
  //step 5 api ki method hai post aur api ka naam hai notes
  console.log(req.body); //ye sirf current passed reqeust ko print karta hai
  notes.push(req.body); //step 7 jo data hmaare paas client side se aa raha hai re.body k andar usko humein push kardiya
  console.log(notes); //step 8 fir uss notes array ko print karlo
  // ye poora array that is sab pushed items ko print karega
  res.send("notes created");
});
// step 9 API 2 GET
//ye api user ne jitne bhi notes create kare hain vo saare notes fetch alkr k client side pe vapis laa sakein=>GET
app.get("/notes", (req, res) => {
  res.send(notes);
});

//STEP 10 API 3 sp that client can delete node
app.delete("/notes/:index", (req, res) => {
  //this directs to the particular note using index and delete it
  delete notes[req.params.index];
  res.send("note deleted");
});
//STEP 11 API 4 update the only description part of a particular note
app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  res.send("note updated");
});

module.exports = app; //step2- export the app to use in server.js
