const { logger } = require('../services')

function errorHandler(err, _, res, next) {
  logger.info(err)
  const defaultMessage =
    'An error has ocurred. Please, try again or contact the system administrator'

  if (res.headersSent) {
    if (err.error) {
      return next(err.error)
    }
    return next(err)
  }

  if (err.error) {
    const { error, message, status, context } = err
    const finalMessage =
      (error.isJoi
        ? `${message || 'Validation Error'}: ${error.message}`
        : message || defaultMessage) ||
      message ||
      defaultMessage
    return res.status(status).json({
      message: finalMessage,
      context,
      statusCode: status,
    })
  }

  return res.status(500).json({
    message: defaultMessage,
    statusCode: 500,
  })
}

module.exports = errorHandler