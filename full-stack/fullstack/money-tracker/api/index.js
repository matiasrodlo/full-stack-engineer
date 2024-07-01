/* const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors() )
app.use(express.json())
app.post(path: '/api/transaction', handlers: (req: ..., res: Response<ResBody>, Locals) => {
    const {name, description, datetime} = res.body;
    res.json(req.body)
})

app.listen(port: 4040) */

const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all origins (adjust for production environments)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Define the endpoint for handling transactions
app.post("/api/transaction", (req, res) => {
  try {
    // Extract data from the request body
    const { name, description, datetime } = req.body;

    // Perform any necessary validations or processing (optional)

    // Assuming successful processing, send a response
    res.json({ message: "Transaction processed successfully" }); // Informative response
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Internal Server Error" }); // Generic error response
  }
});

// Start the server
app.listen(4040, () => {
  console.log("Server listening on port 4040");
});
