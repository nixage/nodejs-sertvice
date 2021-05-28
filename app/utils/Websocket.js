
class WebSocket {
  rooms = [];

  connection(ws) {
    ws.on('message', data => {
      data = JSON.parse(data)
      switch (data.event) {
        case 'subscribe':
          this.subscribeUser(data.userId, data.channelId, ws)
          break;
      }
    })
    ws.send(JSON.stringify({type: "connect", ok: true}));
  }

  subscribeUser(userId, channelId, ws) {
    if(!userId || !channelId) {return errorSubscribeUser()}
    /* unsubscribe user from prev cahnnel */
    this.rooms = this.rooms.filter(sub => sub.userId !== userId);
    this.rooms.push({ userId, userId, channelId, client: ws});
    this.successSubscribeUser(ws);
  }
  successSubscribeUser(ws){
    ws.send(JSON.stringify({type: 'subscribe', ok: true}))
  }
  errorSubscribeUser(ws){
    ws.send(JSON.stringify({type: 'subscribe', ok: false}))
  }
  sendMessage(channelId, event, message) {
    this.rooms.forEach( sub => {
      if(channelId === sub.channelId) {
        sub.client.send(JSON.stringify({event: event, data: message}))
      }
    })
  }
}

module.exports = new WebSocket();