// const http = require("http");
// const express = require("express");
// const WebSocket = require("ws");
// const port = process.env.PORT || 3000;
// const cors = require('cors');

// const app = express();

// app.use(cors())
// app.use(express.json())

// const server = http.createServer(app);

// const wss = new WebSocket.Server({ server, path: '/slack-events' });

// const dispatchEvent = (type, message) => {
//   wss.clients.forEach(client => client.send(JSON.stringify({type: type, event: message})))
// }

// app.post('/api/slack/new-message', ((req, res) => {
//   const message = req.body;
//   dispatchEvent('new-message', message)
//   return res.json(true)
// }))

// app.post('/api/slack/new-thread-message', ((req, res) => {
//   const message = req.body;
//   dispatchEvent('new-thread-message', message)
//   return res.json(true)
// }))

// app.post('/api/slack/delete-message', ((req, res) => {
//   const message = req.body;
//   dispatchEvent('delete-message', message)
//   return res.json(true)
// }))

// app.get('/home', ((req, res) => {
//   res.send("Home work")
// }))

// wss.on('connection', ws => {
//   ws.send(JSON.stringify({type: "connect", ok: true}));
// });

// server.listen(port, () => console.log("Server started"))


var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.json('Home Page');
})

app.listen(8080);