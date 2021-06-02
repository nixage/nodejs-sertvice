const { format, transports, createLogger } = require('winston');
const appRoot = require('app-root-path');

module.exports = createLogger({
  level: 'info',
  format: format.combine(format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }), format.json()),
  transports: [new transports.File({ filename: `${appRoot}/app/logs/info.log` })],
});
