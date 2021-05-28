const express = require("express");
// controllers
const {
  newMessage, 
  newThreadMessage, 
  deleteMessage
} = require('../controllers/slack');

const router = express.Router();

router.post('/new-message', newMessage);
router.post('/new-thread-message', newThreadMessage);
router.post('/delete-message', deleteMessage);

module.exports = router