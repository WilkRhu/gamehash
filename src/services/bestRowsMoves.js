const bestRowsMoves = (data) => {
    try {
        const newLine = []
        data.map((i, id) => {
            if (i.indexOf('o') >= 0) {
                return newLine.push(i, { indice: id })
            }
        })

        const spaceFilter = newLine[0].indexOf(' ')
        const { indice } = newLine[1];
        data[spaceFilter].splice(indice, 1, 'o')
        
        return data.toString().replace(/,+/g, '')
    } catch (error) {
        return {
            status: 400,
            error
        }
    }
}

module.exports = bestRowsMoves