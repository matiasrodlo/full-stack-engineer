const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/Transaction.js");
const mongoose = require("mongoose");
const app = express();

// Enable CORS for all origins (adjust for production environments)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Define the endpoint for handling transactions
app.post("/api/transaction", async (req, res) => {
  try {
    // Extract data from the request body
    await mongoose.connect(process.env.MONGO_URL);
    const { name, description, datetime, price } = req.body;
    const transaction = await Transaction.create({
      name,
      description,
      datetime,
      price,
    });

    // Perform any necessary validations or processing (optional)

    // Assuming successful processing, send a response
    res.json(transaction); // Informative response
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Internal Server Error" }); // Generic error response
  }
});

app.get("/api/transactions", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();
  res.json(transactions);
});

// Start the server
app.listen(4040, () => {
  console.log("Server listening on port 4040");
});
