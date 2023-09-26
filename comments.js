// Create web server
const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/comments', (req, res) => {
    res.send('Comments');
}

