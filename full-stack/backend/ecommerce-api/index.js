const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connection Successfull")).catch((err) => {console.log(err);})

app.get("/pr", () => {
    console.log("test is successfull")
});

app.listen(process.env.PORT || 5000, () => { 
    console.log("backend server is running");
});