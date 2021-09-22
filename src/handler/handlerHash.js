const app = require('../app')
const handler = require('../../handler')

app.get('/', async(req, res, next) => {
    try {
        const { board } = req.query
        return res.status(200).json(board.split(''))
    } catch (error) {
        throw error
    }
})

module.exports.handler = handler(app)