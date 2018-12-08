const http = require('http');
const express = require('express');
const app = express();
const WebSocketServer = require('ws').Server;

app.use('/dist', express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/dist'));
var server = http.createServer(app);
var wss = new WebSocketServer({ server: server });

var connections = [];
var messages = [];

wss.on('connection', function (ws) {
    connections.push(ws);
    ws.on('close', function () {
        connections = connections.filter(function (conn, i) {
            return (conn === ws) ? false : true;
        });
    });
    ws.on('message', function (message) {
        messages.push(message);
        console.log('message:', message);
        broadcast(JSON.stringify(messages));
    });
});

function broadcast(message) {
    connections.forEach(function (con, i) {
        con.send(message);
    });
};

server.listen(3000);