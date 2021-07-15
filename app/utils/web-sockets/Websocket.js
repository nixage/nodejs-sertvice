class WebSocket {
  rooms = [];
  websocket = null;
  websocketServer = null;

  connection(websocket, websocketServer) {
    this.websocketServer = websocketServer;
    websocket.on('message', (data) => {
      data = JSON.parse(data);
      switch (data.event) {
        case 'subscribe':
          this.subscribeUser(data.userId, data.channelId, websocket);
          break;
      }
    });
    websocket.send(JSON.stringify({ type: 'connect', ok: true }));
  }

  subscribeUser(userId, channelId, ws) {
    if (!userId || !channelId) {
      return errorSubscribeUser();
    }
    /* unsubscribe user from prev cahnnel */
    this.rooms = this.rooms.filter((sub) => sub.userId !== userId);
    this.rooms.push({ userId, userId, channelId, client: ws });
    this.successSubscribeUser(ws);
  }
  successSubscribeUser(ws) {
    ws.send(JSON.stringify({ type: 'subscribe', ok: true }));
  }
  errorSubscribeUser(ws) {
    ws.send(JSON.stringify({ type: 'subscribe', ok: false }));
  }
  sendMessageToChannel(channelId, event, message) {
    this.rooms.forEach((sub) => {
      if (channelId === sub.channelId) {
        this._send(sub.client, event, message);
      }
    });
  }
  sendMessageClients(event, message) {
    this.websocketServer.clients.forEach((client) => {
      this._send(client, event, message);
    });
  }

  _send(ws, event, data) {
    ws.send(JSON.stringify({ event, data }));
  }
}

module.exports = new WebSocket();
