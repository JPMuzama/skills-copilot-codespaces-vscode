// Create web server
// 1. Install express
// 2. Create a server
// 3. Listen to the port
// 4. Create a route
// 5. Create a response
// 6. Send the response

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/comments', (req, res) => {
    res.send('Comments');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Run the server
// node comments.js
// Open the browser and enter the URL
// http://localhost:3000
// http://localhost:3000/comments