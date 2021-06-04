const { logger, loggerResumeParser } = require('@utils/logger');

const log = (level, message) => {
  logger.log({
    level: level,
    message: message,
  });
};

const resumeLog = (level, message) => {
  loggerResumeParser.log({
    level: level,
    message: message,
  });
};

module.exports = {
  log,
  resumeLog,
};
