const verified = (data, rows) => {
    const colum = data.map(i => i.filter(o => o === 'o'))
    const line = rows.map(i => i.filter(o => o === 'o'))
    const sizeColum = colum.map(i => i.length)
    const sizeLine = line.map(i => i.length)
    const v1 = sizeColum.reduce((a, p) => a > p ? a : p )
    const v2 =sizeLine.reduce((a, p) => a > p ? a : p )
    if(v1 > v2) {
      return 'colum'
    } else if(v1 < v2) {
      return 'rows'
    } else if(v1 === v2) {
      return 'diagonals'
    }
  }

  module.exports = verified
  