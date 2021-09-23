const bestPlayerDiagonals = (data) => {
  try {
    const firstDiagonals = []
    const arr = []
    const index = []
    const resp = []

    firstDiagonals.push(
      [data[0][0], data[1][1], data[2][2]],
      [data[0][2], data[1][1], data[2][0]]
    )
    firstDiagonals.map(i => {
      arr.push(i.filter(o => o != 'x'))
      if(i.indexOf(' ') >= 0 && i.filter(o => o != 'x')) {
        index.push(i.indexOf(' '))
      }
    })

 
      arr.map(i => {
        if(i.length === 3) {
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

module.exports = bestPlayerDiagonals