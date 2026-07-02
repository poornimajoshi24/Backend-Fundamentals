// iska main kaam hai serer ko start karna aur dusra kaam hai database se connect karna

require("dotenv").config(); //step 10

const app = require("./src/app"); //step 4
const connectToDB = require("./src/config/database"); //step 14
connectToDB(); //step 15
app.listen(3000, () => {
  // step 5
  console.log("server is running on port 3000");
});
