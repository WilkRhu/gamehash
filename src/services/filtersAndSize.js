const filtersAndSize = async (data) => {
    const result = []
    const compare = [
        [' ', 'o', 'o'],
        ['o', ' ', 'o'],
        ['o', 'o', ' ']
    ]
    const filterX = data.map(i => i.filter(x => x === 'x').length).reduce((a, b) => a > b ? a : b)
    if (filterX != 3) {
        data.map((i, id) => {
            const eq = equals(i, compare[id])
            if (eq) {
                result.push(i.filter(o => o === 'o').length)
            }
        })
        if (result.length === 0) {
            return result.length
        }
        return result[0]
    } else {
        return {
            status: 400,
            message: 'You Lose!'
        }
    }
}

const equals = ((i, compare) => JSON.stringify(i) === JSON.stringify(compare) ? true : false)

module.exports = filtersAndSize