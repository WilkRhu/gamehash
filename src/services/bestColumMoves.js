const bestPlayerColum = (data, rows) => {
    try {
        const newBath = []
        data.map((i, id) => {
            if(i.indexOf('o') >= 0) {
            return newBath.push( i, {indice: id})
            }
        })
        const spaceFilter = newBath[0].indexOf(' ')
        const { indice } = newBath[1];
        rows[spaceFilter].splice(indice, 1, 'o')
        return rows.toString().replace(/,+/g, '')
    } catch (error) {
        return {
            status: 400,
            error
        }
    }
}

module.exports = bestPlayerColum