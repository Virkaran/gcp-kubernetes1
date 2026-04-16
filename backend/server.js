const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ 
    message: "Data fetched successfully from GKE Backend!",
    timestamp: new Date().toISOString()
  });
});

app.listen(5000, () => console.log('Backend running on port 5000'));