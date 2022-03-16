const express = require('express');
const path = require('path');

const app = express();

const fs = require('fs')
// Configuration
const PORT = process.env.PORT || '3007';
const HOST = process.env.HOST || "localhost";

// Init Middleware
app.use(express.json());

app.use(express.static('build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// const server = websockets(app);
// server.listen(PORT, HOST, () => console.log(`Server started on port ${PORT}`));
app.listen(PORT, HOST, () => console.log(`Server started on port ${PORT}`));