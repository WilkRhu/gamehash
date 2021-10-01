const verifiedDiagonals = require('../util/verifiedDiagonals')
const filterCompareDiagonals = require('./filterCompareDiagonals')
const { filterCompareRowsAndColum } = require('./filterCompareRowsAndColum')

const checkBestMove = (data, rows) => {
  try {
    const compareDiagonals = verifiedDiagonals(rows)
    const line = filterCompareRowsAndColum(rows)
    const colum = filterCompareRowsAndColum(data)
    const diagonals = filterCompareDiagonals(compareDiagonals, rows)
    const { error, status } = diagonals

    if (!colum.status && !line.status) {
      if (colum > line) {
        return 'colum'
      } else if (colum < line) {
        return 'rows'
      } else if (colum === line && !status) {
        return 'diagonals'
      } else {
        return {
          status,
          error
        }
      }
    } else {
      return colum <= 0 ? line : colum
    }
  } catch (error) {
    return {
      status: 400,
      error
    }
  }
}

module.exports = checkBestMove
