const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/weather", async (req, res) => {
  try {
    const locationKey = "1-241919_1_AL";
    const apiKey = "UwGcEP1BJFyFIQvybPBErBXAE7phUc9p";

    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}`, {
      params: {
        apikey: apiKey,
        details: true,
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error in /api/weather route:", error);  // Log the error
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
