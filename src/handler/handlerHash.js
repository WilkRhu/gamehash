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
            const verifiedMove = await checkBestMove(data, rows)
            if (verifiedMove.status !== 400) {
                if (verifiedMove === 'colum') {
                    return await res.status(200).json(bestColumMoves(data, rows))
                } else if (verifiedMove === 'rows') {
                    return await res.status(200).json(bestRowsMoves(rows))
                } else if (verifiedMove === 'diagonals') {
                    return await res.status(200).json(bestDiagonalsMoves(rows))
                } else {
                    return res.status(400).json({ message: 'Bad Request' })
                }
            } else {
                return res.status(400).json(verifiedMove)
            }
        }
        return res.status(400).json(error)
    } catch (error) {
        return error
    }
})

module.exports.handler = handler(app)