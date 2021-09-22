const serverless = require('serverless-http')
const errorHandler = require('./src/middleware/errorHandler')

module.exports = (app, error_handler = errorHandler) => {
  app.use(error_handler)

  if (process.env.NODE_ENV === 'test') {
    require('dotenv').config()
    return app
  }
  return serverless(app)
}