const logger = require('./logger')
const checkBestMove = require('./checkBestMove')
const smashString = require('./smashString')
const bestColumMoves = require('./bestColumMoves')
const bestRowsMoves = require('./bestRowsMoves')
const bestDiagonalsMoves = require('./bestDiagonalMoves')
const filterCompare = require('./filterCompare')

module.exports = {
    logger,
    checkBestMove,
    smashString,
    bestColumMoves,
    bestRowsMoves,
    bestDiagonalsMoves,
    filterCompare
}