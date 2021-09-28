const app = require('../app')
const handler = require('../../handler')
const {
    checkBestMove,
    smashString,
    bestColumMoves,
    bestRowsMoves,
    bestDiagonalsMoves
} = require('../services')
const stringSchema = require('../validation/stringValidation')

app.get('/', async (req, res) => {
    try {
        const { board } = req.query
        const { error, value } = stringSchema.validate({ board })
        if(!error) {
            const { data, rows } = await smashString(value.board)
            const vf = await checkBestMove(data, rows)
            if (vf.status !== 400) {
                if (vf === 'colum') {
                    return await res.status(200).json(bestColumMoves(data, rows))
                } else if (vf === 'rows') {
                    return await res.status(200).json(bestRowsMoves(rows))
                } else if (vf === 'diagonals') {
                    return await res.status(200).json(bestDiagonalsMoves(rows))
                } else {
                    return res.status(400).json({ message: 'Bad Request' })
                }
            } else {
                return res.status(400).json(vf)
            }
        }
        return res.status(400).json(error)
    } catch (error) {
        return error
    }
})

module.exports.handler = handler(app)