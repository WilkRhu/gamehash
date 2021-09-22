const smashString = (data) => {
    const rows = []
    const f = []
    const s = []
    const tr = []

    for (let i = 0; i < data.length / 3; i++) {
        const t = data.split('').splice(i * 3,  3);
        rows.push(t)
        f.push(t[0])
        s.push(t[1])
        tr.push(t[2])
    }

    return {data: [f, s, tr], rows}
}

module.exports = smashString