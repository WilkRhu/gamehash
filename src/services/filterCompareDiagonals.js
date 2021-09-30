const bestDiagonalsMoves = require("./bestDiagonalMoves")

const filterCompareDiagonals = (compare, rows) => {
    const verifiedBestMove = compare.map(i => i.filter(o => o === 'o').length)
    if(verifiedBestMove[0] !== 0 && verifiedBestMove.length !== 0) {
       return bestDiagonalsMoves(rows)
    }
    return {
        status: 400,
        error: 'No search best move on diagonals'
    }
}

module.exports = filterCompareDiagonals