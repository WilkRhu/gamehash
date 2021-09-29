const checkBestMove = require('./checkBestMove')
const smashString = require('./smashString')
const bestColumMoves = require('./bestColumMoves')
const bestRowsMoves = require('./bestRowsMoves')
const bestDiagonalsMoves = require('./bestDiagonalMoves')
const { filterCompareRowsAndColum } = require('./filterCompareRowsAndColum')

module.exports = {
    checkBestMove,
    smashString,
    bestColumMoves,
    bestRowsMoves,
    bestDiagonalsMoves,
    filterCompareRowsAndColum
}