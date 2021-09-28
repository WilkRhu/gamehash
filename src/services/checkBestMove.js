const { filterCompare } = require('./filterCompare')

const checkBestMove = (data, rows) => {
  try {
    const line = filterCompare(rows)
    const colum = filterCompare(data)

    if (!colum.status && !line.status) {
      if (colum > line) {
        return 'colum'
      } else if (colum < line) {
        return 'rows'
      } else if (colum === line) {
        return 'diagonals'
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
