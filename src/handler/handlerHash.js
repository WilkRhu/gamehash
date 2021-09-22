const app = require('../app')
const handler = require('../../handler')
const { verified } = require('../services')

app.get('/', async(req, res, next) => {
    try {
        const { board } = req.query
        const rows = []
        const f = []
        const s = []
        const tr = []

        for (let i = 0; i < board.length / 3; i++) {
            const t = board.split('').splice(i * 3,  3);
            rows.push(t)
            f.push(t[0])
            s.push(t[1])
            tr.push(t[2])
        }
        const vf = await verified([f, s, tr], rows)
       
    } catch (error) {
        throw error
    }
})

module.exports.handler = handler(app)