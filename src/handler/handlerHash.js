const app = require('../app')
const handler = require('../../handler')
const { 
    verifiedTypesPlays, 
    smashString, 
    bestPlayerColum, 
    bestPlayerRows, 
    bestPlayerDiagonals 
} = require('../services')

app.get('/', async (req, res) => {
    try {
        const { board } = req.query
        const { data, rows } =  await smashString(board)
        console.log(rows)
        const vf =  await verifiedTypesPlays(data, rows)
        console.log(rows)
        if (vf.status !== 400) {
            if (vf === 'colum') {
                const resp = await bestPlayerColum(data, rows)
                return res.status(200).json(resp)
            } else if (vf === 'rows') {
                const resp = await bestPlayerRows(rows)
                return res.status(200).json(resp)
            } else if (vf === 'diagonals') {
                const resp = await bestPlayerDiagonals(rows)
                return res.status(200).json(resp)
            } else {
                return res.status(400).json({
                    message: 'Bad Request'
                })
            }
        } else {
            return res.status(400).json(vf)
        }
    } catch (error) {
        return error
    }
})

module.exports.handler = handler(app)