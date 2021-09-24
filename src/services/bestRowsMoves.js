const bestRowsMoves = (data) => {
    try {
        const newLine = []
        data.map((i, id) => {
            if (i.indexOf('o') >= 0 && !i.find(x => x === 'x') && i.filter(space => space === ' ') < 1) {
                return newLine.push(i, { index: id })
            }
        })

        const indexSpace = newLine[0].indexOf(' ')
        const { index } = newLine[1];
        data[index].splice(indexSpace, 1, 'o')

        return data.toString().replace(/,+/g, '')
    } catch (error) {
        return {
            status: 400,
            error
        }
    }
}

module.exports = bestRowsMoves