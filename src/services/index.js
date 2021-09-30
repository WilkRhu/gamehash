const checkBestMove = require('./checkBestMove')
const smashString = require('./smashString')
const bestColumMoves = require('./bestColumMoves')
const bestRowsMoves = require('./bestRowsMoves')
const bestDiagonalsMoves = require('./bestDiagonalMoves')
const { filterCompareRowsAndColum } = require('./filterCompareRowsAndColum')
const filterCompareDiagonals = require('./filterCompareDiagonals')

module.exports = {
    checkBestMove,
    smashString,
    bestColumMoves,
    bestRowsMoves,
    bestDiagonalsMoves,
    filterCompareRowsAndColum,
    filterCompareDiagonals
}