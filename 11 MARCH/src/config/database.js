const mongoose = require("mongoose");

function connectTODb() {
    return mongoose
        .connect("mongodb+srv://ankur:sqblaspiAzE558Ip@cluster0.jwqdf5w.mongodb.net//abc")
        .then(() => {
            console.log("Connected to database");
        })
}

module.exports = connectTODb;