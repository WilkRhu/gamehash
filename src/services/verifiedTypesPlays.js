const filtersAndSize  = require('./filtersAndSize')

const verifiedTypesPlays = async (data, rows) => {
  try {
    const line = await filtersAndSize(rows)
    const colum = await filtersAndSize(data)
    
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

module.exports = verifiedTypesPlays
