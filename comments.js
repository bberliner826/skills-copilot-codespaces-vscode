// Create web server
// 1. Load http module
var http = require('http');

// 2. Create web server
http.createServer(function (req, res) {
    // 3. Content header
    res.writeHead(200, { 'content-type': 'text/html' });

    // 4. Write message to user
    res.write('<h1>Web Server with Node.js</h1>\n');

    // 5. End response
    res.end();
}).listen(3000, function () {
    console.log('Server running at http://localhost:3000/');
});

// 6. Output message to console
console.log('Server running at http://localhost');