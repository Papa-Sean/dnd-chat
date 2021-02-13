const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>');
});

io.on('connection', () => { 
    console.log('yea!');
 });

server.listen(3001);