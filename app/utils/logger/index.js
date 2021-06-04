const { format, transports, createLogger } = require('winston');
const appRoot = require('app-root-path');

const logger = createLogger({
  format: format.combine(format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }), format.json()),
  transports: [new transports.File({ filename: `${appRoot}/app/logs/info.log`, level: 'info' })],
});

const loggerResumeParser = createLogger({
  transports: [
    new transports.File({
      filename: `${appRoot}/app/logs/resume-info.log`,
      level: 'info',
      format: format.combine(format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }), format.json()),
    }),
  ],
});

module.exports = {
  logger,
  loggerResumeParser,
};
