const express = require("express");
const app = express();

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://matias:matias@cluster0.7uizv0n.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("DB Connection Successfull")).catch((err) => {console.log(err);})

app.listen(4000, () => { 
    console.log("backend server is running");
});