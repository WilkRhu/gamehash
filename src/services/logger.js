const { createLogger, format, transports } = require('winston')
const { combine, printf, timestamp } = format

const logFormat = printf(
  ({ timestamp, level, message }) =>
    `(LOGGER)[${level.toUpperCase()}] => ${timestamp} - ${message}`,
)

const getConsoleLogLevel = () => {
  switch (process.env.NODE_ENV) {
    case 'test':
      return 'silent'
    case 'personal':
      return 'debug'
    case 'development':
      return 'info'
    case 'production':
    default:
      return 'alert'
  }
}

module.exports = createLogger({
  levels: {
    silent: 0,
    error: 1,
    warn: 2,
    alert: 3,
    info: 4,
    http: 5,
    verbose: 6,
    debug: 7,
  },
  format: combine(timestamp(), logFormat),
  transports: [
    new transports.Console({
      level: getConsoleLogLevel(),
    }),
  ],
})
