const express = require('express');
// controllers
const { newMessage, newThreadMessage, deleteMessage } = require('@controllers/slack/slack');

// middlewares
const bodyValidation = require('@middlewares/validations/slack/slack-body.validation');

const router = express.Router();

router.post('/slack/new-message', bodyValidation, newMessage);
router.post('/slack/new-thread-message', bodyValidation, newThreadMessage);
router.post('/slack/delete-message', bodyValidation, deleteMessage);

module.exports = router;
