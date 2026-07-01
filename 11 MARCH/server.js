// server  ko start aur database se connect karta hai

require("dotenv").config( )

const app = require("./src/app");
const connectTODb=require("./src/config/database");
// const mongoose = require("mongoose");
// function connectTODb() {
//   mongoose
//     .connect(
//       "mongodb+srv://joshipoornima969_db_user:Poornima123@cluster0.rhw72pt.mongodb.net/abc",
//     )
//     .then(() => {//ki jab bhi hum mongoose.connect ki help se(hmaari local machine pe running server jab mumbai vaale cluster ) apne database se connect kar jayenge tab ye vala chal jayega jisse humein pata chal jayega ki humara server database se connect ho gaya hai
//       console.log("connected to database");
//     });
// } iss poore ko shift to another file named database called database.js and then export it and import it here in server.js
connectTODb();
app.listen(3000, () => {
  console.log("server is running on port 3000");
});



