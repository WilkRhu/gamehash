const filterCompare  = require('./filterCompare')

const checkBestMove = async (data, rows) => {
  try {
    const line = await filterCompare(rows)
    const colum = await filterCompare(data)
    
    if(!colum.status && !line.status) {
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
     return error
  }
}

module.exports = checkBestMove
