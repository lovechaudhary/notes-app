const http = require('http');
const app = require('./middleware/app');
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, (err) => {
    if (err) throw err;
    else console.log(`Server is running on port ${port}`);
});

