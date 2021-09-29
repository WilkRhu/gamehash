const verifiedDiagonals = (data) => {
  return [
    [data[0][0], data[1][1], data[2][2]],
    [data[0][2], data[1][1], data[2][0]]
  ]
}

module.exports = verifiedDiagonals