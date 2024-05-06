// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Creating an instance of Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Define your API endpoint
app.post('/api', (req, res) => {
  // Extracting data from the request body
  const { count, Number } = req.body;

  // Checking if count and Number are multiples of 5 and Number is even
  if (count % 5 === 0 && Number % 5 === 0 && Number % 2 === 0) {
    // Sending back the response
    res.status(200).json({
      statuscode: 200,
      count: count,
      Number: Number
    });
  } else {
    // Sending an error response if conditions are not met
    res.status(400).json({
      statuscode: 400,
      error: "Invalid input. count must be a multiple of 5 and Number must be a multiple of 5 and an even number."
    });
  }
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
