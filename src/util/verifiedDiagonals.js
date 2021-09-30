const { equals } = require("../services/filterCompareRowsAndColum")
const { compare } = require("./compares")

const verifiedDiagonals = (data) => {
  const response = []
  const verified =  [
    [data[0][0], data[1][1], data[2][2]],
    [data[0][2], data[1][1], data[2][0]]
  ]
  verified.map(i => compare.map(compares => equals(i, compares) ?  response.push(i) : null))
  return response
}

module.exports = verifiedDiagonals