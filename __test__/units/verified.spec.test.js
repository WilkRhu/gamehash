const {verified} = require('../../src/services/index')
describe('Test handlerHash units', () => { 
    it('should success return vf function diagonals', async() => {
        const rows = []
        const f = []
        const s = []
        const tr = []
        const str = 'ox  oxx  '
        for(var i = 0; i < str.length / 3; i++) {
            const t = str.split('').splice(i * 3,  3);
            rows.push(t)
            f.push(t[0])
            s.push(t[1])
            tr.push(t[2])
        }
        const response = await verified([f, s, tr], rows)
        expect(response).toBe('diagonals')
    })

    it('should success return vf function colum', async() => {
        const str = ' xxo  o  '
        const rows = []
        const f = []
        const s = []
        const tr = []

        for(var i = 0; i < str.length / 3; i++) {
            const t = str.split('').splice(i * 3,  3);
            rows.push(t)
            f.push(t[0])
            s.push(t[1])
            tr.push(t[2])
        }
        const responseColum = await verified([f, s, tr], rows)
        expect(responseColum).toBe('colum')
    })

    it('should success return vf function rows', async() => {
        const str = ' oox  x  '
        const rows = []
        const f = []
        const s = []
        const tr = []
        
        for(var i = 0; i < str.length / 3; i++) {
            const t = str.split('').splice(i * 3,  3);
            rows.push(t)
            f.push(t[0])
            s.push(t[1])
            tr.push(t[2])
        }
        const responseRows = await verified([f, s, tr], rows)
        expect(responseRows).toBe('rows')
    })

})