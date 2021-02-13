const app = require('express')();
const httpServer = require('http').createServer(app);
// const io = require('socket.io')(server);
const io = require("socket.io")(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

app.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>');
});

io.on('connection', () => { 
    console.log('yea!');
 });

httpServer.listen(3001);