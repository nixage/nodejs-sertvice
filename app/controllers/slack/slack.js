const WebSocket = require('@utils/web-sockets/Websocket');

const newMessage = (req, res) => {
  const body = req.body;
  WebSocket.sendMessageToChannel(body.channel, 'new-message', body);
  WebSocket.sendMessageClients('new-channel-unhread-message', body);
  return res.json({ valid: true });
};

const newThreadMessage = (req, res) => {
  const body = req.body;
  WebSocket.sendMessageToChannel(body.channel, 'new-thread-message', body);
  return res.json({ valid: true });
};

const deleteMessage = (req, res) => {
  const body = req.body;
  WebSocket.sendMessageToChannel(body.channel, 'delete-message', body);
  return res.json({ valid: true });
};

module.exports = {
  newMessage,
  newThreadMessage,
  deleteMessage,
};
