const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const WebSocket = require("ws");
const http = require("http");
dotenv.config();

const port = process.env.PORT;
const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server, path: '/slack-events' });
app.use(cors())
app.use(express.json())

/* ROUTES */
const slackRoutes = require('./app/routes/slack');
app.use('/api/slack', slackRoutes);

/* WEBSOCKET CONF */
const WebSocketConf =  require('./app/utils/Websocket');
wss.on('connection', (ws) => {
  WebSocketConf.connection(ws);
});

app.get('/home', ((req, res) => {
  res.send("Home work")
}))

server.listen(port, () => console.log("Server started " + port))