const smashString = (data) => {
    const rows = []
    const firstColum = []
    const secondColum = []
    const thirdColum = []

    for (let i = 0; i < data.length / 3; i++) {
        const arr = data.split('').splice(i * 3, 3);
        rows.push(arr)
        firstColum.push(arr[0])
        secondColum.push(arr[1])
        thirdColum.push(arr[2])
    }

    return { data: [firstColum, secondColum, thirdColum], rows }
}

module.exports = smashString