if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({
      path: '.env.test',
    })
  }
  const express = require('express')
  const cors = require('cors')
  const app = express()

  app.use(cors())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  
  module.exports = app