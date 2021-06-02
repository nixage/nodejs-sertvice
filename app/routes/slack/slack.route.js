const express = require('express');
// controllers
const {
  newMessage,
  newThreadMessage,
  deleteMessage,
} = require('@controllers/slack/slack');

// middlewares
const bodyValidation = require('@middlewares/validations/slack/slack-body.validation');

const router = express.Router();

router.post('/new-message', bodyValidation, newMessage);
router.post('/new-thread-message', bodyValidation, newThreadMessage);
router.post('/delete-message', bodyValidation, deleteMessage);

module.exports = router;
