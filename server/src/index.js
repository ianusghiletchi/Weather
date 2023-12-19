const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

console.log('location:', process.env.LOCATION_KEY);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/weather", async (req, res) => {
  try {
    const locationKey = process.env.LOCATION_KEY;
    const apiKey = process.env.API_KEY;

    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}`, {
      params: {
        apikey: apiKey,
        details: true,
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error in /api/weather route:", error)
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
