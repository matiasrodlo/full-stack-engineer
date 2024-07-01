const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Define the transaction schema
const TransactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace (optional)
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace (optional)
  },
  datetime: {
    type: Date,
    required: true,
    default: Date.now, // Set to current timestamp by default
  },
});

// Create the transaction model
const TransactionModel = mongoose.model("Transaction", TransactionSchema);

module.exports = TransactionModel;
