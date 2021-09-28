const { compareDiagonals } = require("../util/compares")
const { equals } = require("./filterCompare")

const bestDiagonalMoves = (data) => {
  try {
    const firstDiagonals = []
    const arr = []

    firstDiagonals.push(
      [data[0][0], data[1][1], data[2][2]],
      [data[0][2], data[1][1], data[2][0]]
    )
    firstDiagonals.map(i => {
      arr.push(i.filter(o => o !== 'x'))
    })

    arr.map(i => {
      if (i.length === 3) {
        const spaceFilter = i.filter(space => space === ' ').length === 2 && !equals(i, compareDiagonals) ? 2 : i.indexOf(' ')
        const index = data[spaceFilter].indexOf(' ')
        data[spaceFilter].splice(index, 1, 'o')
      }
    })

    return data.toString().replace(/,+/g, '')
  } catch (error) {
    return {
      status: 400,
      error
    }
  }
}

module.exports = bestDiagonalMoves