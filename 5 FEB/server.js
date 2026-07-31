const express = require("express"); //step 1
const app = express(); //step 2
app.use(express.json()); //step 8 (because  express only is not able to access the req.body data )
const notes = []; //step 3

//METHHOD= POST
app.post("/notes", (req, res) => {
  //step 5
  console.log(req.body); //step 7(req.body k andar kuchh data hai j pfrontend that is postman sen bheja hai(body>raq>json)that is title and description ab vo data access kane k loye we ues step  8 because hamara server(express)by deafult nahi aaccess kar paata )
  notes.push(req.body); //step 9 (notes array k andar req.body se data(jo backend se aay hai) push karna)
  res.send("note created"); //step 6(backend se response bhejne k liye res.send() and this emssage is displayed in postman when we type URL and click send)
});

//METHOD= GET (same API he create kari hai jiska naam hai /notes but bas methods ka naam diffeent hai )
app.get("/notes", (req, res) => {
  //step 10
  res.send(notes); //notes k andar jo bhi data hai vo res.send() k through frontend ko bhej do
});
app.listen(3000, () => {
  //step 4
  console.log("Server is running on port 3000");
});
