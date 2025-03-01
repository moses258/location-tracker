const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received location: Latitude ${latitude}, Longitude ${longitude}`);
    res.json({ message: 'Location received' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
