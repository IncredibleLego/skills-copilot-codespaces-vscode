// Create web server
// - Listen on port 3000
// - Respond to the URL /comments
// - Respond with JSON data

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({name: 'John', age: 30}));
});

server.listen(3000);