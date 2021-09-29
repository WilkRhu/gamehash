const bestDiagonalsMoves = require("./bestDiagonalMoves")

const filterCompareDiagonals = (compare, rows) => {
    const verifiedBestMove = compare.map(i => i.filter(o => o === ' ' && o !== 'x').length)
    return verifiedBestMove.map(i => {
        if (i >= 1) {
            bestDiagonalsMoves(rows) ? bestDiagonalsMoves(rows) : {
                status: 400,
                error: 'No search best move'
            }
        }
    })
}

module.exports = filterCompareDiagonals