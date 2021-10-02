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
        if (!error) {
            const { data, rows } = await smashString(value.board)
            const verifiedMove = await checkBestMove(data, rows)
            const { status, message } = verifiedMove;
            if(status) return res.status(400).json({ status, message})
            switch (verifiedMove) {
                case "colum": return await res.status(200).json(bestColumMoves(data, rows))
                case "rows": return await res.status(200).json(bestRowsMoves(rows))
                case "diagonals": return await res.status(200).json(bestDiagonalsMoves(rows))
            }
        }
        throw res.status(400).json(error)
    } catch (error) {
        return error
    }
})

module.exports.handler = handler(app)