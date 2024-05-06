const express = require('express');
const bodyParser = require('body-parser');
const mssql = require('mssql');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint to receive data from ESP32
app.post('/data', async (req, res) => {
  try {
    if (req.is('json')) {
      const data = req.body;

      // Check if the received value is a multiple of 5
      if ((data.count % 5 === 0) || (data.evenNumber % 5 === 0)) {
        res.status(200).send('Received value is a multiple of 5');
      } else {
        res.status(200).send('Received value is not a multiple of 5');
      }

    } else {
      res.status(400).send('Request content type must be JSON');
    }
  } catch (error) {
    console.error('Error handling data:', error);
    res.status(500).send('Internal server error.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
