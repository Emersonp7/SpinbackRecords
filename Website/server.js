const express = require('express');
const app = express();
const port = 3000;

app.get('/callback', (req, res) => {
    res.send('Callback received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});