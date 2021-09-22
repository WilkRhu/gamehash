const app = require('../app')
const handler = require('../../handler')
const { verified, smashString, bestPlayerColum, bestPlayerRows } = require('../services')

app.get('/', async(req, res, next) => {
    try {
        const { board } = req.query
        const { data, rows} = await smashString(board)
        const vf = await verified(data, rows)

        if(vf === 'colum') {
             const resp = await bestPlayerColum(data, rows)
             return res.status(200).json(resp)
          } else if(vf === 'rows') {
              const resp = await bestPlayerRows(rows)
            return res.status(200).json(resp)
          } else if(vf === 'diagonals') {
            return bestDiagonalsPlayer(rows)
          } else {
            return res.status(400).json({ 
                message: 'Bad Request'
            })
          }
    } catch (error) {
        throw error
    }
})

module.exports.handler = handler(app)