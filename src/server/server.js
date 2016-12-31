const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const socketio =require('socket.io');

let PORT;

if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 8000;
}

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/static/')));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/static/index.html'));
});

server.listen(PORT, function() {
  console.log('Listening on port:', PORT);
});

module.exports = app;