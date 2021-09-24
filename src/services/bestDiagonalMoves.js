const bestDiagonalMoves = (data) => {
  try {
    const firstDiagonals = []
    const arr = []

    firstDiagonals.push(
      [data[0][0], data[1][1], data[2][2]],
      [data[0][2], data[1][1], data[2][0]]
    )
    firstDiagonals.map(i => {
      arr.push(i.filter(o => o != 'x'))
    })

    arr.map(i => {
      if (i.length === 3) {
        const b = i.indexOf(' ')
        const loc = data[b].indexOf(' ')
        data[b].splice(loc, 1, 'o')
      }
    })

    return data.toString().replace(/,+/g, '', '')
  } catch (error) {
    return {
      status: 400,
      error
    }
  }
}

module.exports = bestDiagonalMoves