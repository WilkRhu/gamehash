const { checkBestMove, smashString } = require('../../src/services/index')
describe('Test handlerHash units', () => {

    it('should success return vf function rows', async () => {
        const {data, rows} = smashString(' oo x xox')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it('should success return vf function colum', async () => {
        const {data, rows} = smashString(' xxo  o  ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it('should success return vf function diagonals', async () => {
        const {data, rows} = smashString('o  xo xx ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })

    it('should error return vf you loser', async () => {
        const {data, rows} = smashString('o  xo xxx ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows.status).toBe(400)
        expect(responseRows.message).toBe('You Lose!')
    })

})