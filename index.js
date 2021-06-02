const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const WebSocket = require('ws');
const http = require('http');
const fileUpload = require('express-fileupload');
require('module-alias/register');

dotenv.config();
const port = process.env.PORT;
const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server, path: '/slack-events' });
app.use(cors());
app.use(express.json());
app.use(fileUpload());

/* ROUTES */
const slackRoutes = require('@routes/slack/slack.route');
app.use('/api/slack', slackRoutes);

const filesRoutes = require('@routes/files/files.route');
app.use('/api/files', filesRoutes);

/* WEBSOCKET CONF */
const WebSocketConf = require('@utils/web-sockets/Websocket');
wss.on('connection', (ws) => {
  WebSocketConf.connection(ws);
});

app.get('/home', async (req, res) => {
  // const fs = require('fs/promises');
  // await fs.writeFile(
  //   './app/dictionary/male-name-dictionary.json',
  //   `{"names": ""}`
  // );
  res.send('ok');
});

server.listen(port, () => console.log('Server started ' + port));
