const bestPlayerColum = (data, rows) => {
    try {
        const newColum = []
        data.map((i, id) => {
            if (i.indexOf('o') >= 0 && !i.find(x => x === 'x')) {
                return newColum.push(i, { index: id })
            }
        })
        const spaceFilter = newColum[0].filter(space => space === ' ').length === 2 ? 2 :  newColum[0].indexOf(' ')
        const { index } = newColum[1];
        rows[spaceFilter].splice(index, 1, 'o')
        return rows.toString().replace(/,+/g, '')
    } catch (error) {
        return {
            status: 400,
            error
        }
    }
}

module.exports = bestPlayerColum