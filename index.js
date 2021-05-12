const express = require('express');
const cors = require('cors');
const events = require('events')
const PORT = 3000;

const emitter = new events.EventEmitter();

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/slack-events', (req, res) => {
  res.writeHead(200, {
    'Connection': 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  })
  emitter.on('newMessage', (message) => {
      res.write(`data: ${JSON.stringify(message)} \n\n`)
  })
})

app.post('/api/slack/new-message', ((req, res) => {
  const message = req.body;
  emitter.emit('newMessage', message)
  return res.json(true)
}))

app.get('/api/slack/new-message', ((req, res) => {
  const message = req.body;
  emitter.emit('newMessage', message)
  return res.json(true)
}))


app.listen(PORT, () => console.log(`server started on port ${PORT}`))