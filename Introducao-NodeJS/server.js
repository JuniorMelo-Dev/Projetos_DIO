const http = require('http');
const host = 'http://localhost';
const port = 3000;
const status = require('./pcRamUsage');

http.createServer((req, res) => {
    let url = req.url;

    if (url === '/status') {
        res.end(JSON.stringify(status, null, 2))
    } else {
        res.end('<h1>Working</h1>')
    }

}).listen(port, () => console.log(`Server is running in ${host}:${port}, ${status}`));