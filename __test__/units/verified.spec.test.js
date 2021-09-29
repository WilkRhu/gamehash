const { checkBestMove, smashString } = require('../../src/services/index')
describe('Test handlerHash units', () => {

    it.skip('should success return vf function rows 0 - 0', async () => {
        const {data, rows} = smashString(' oo x xox')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it.skip('should success return vf function rows 0 - 1', async () => {
        const {data, rows} = smashString('o o x xox')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it.skip('should success return vf function rows 0 - 2', async () => {
        const {data, rows} = smashString('oo x xox')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it.skip('should success return vf function rows 1 - 0', async () => {
        const {data, rows} = smashString(' xx oox  ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it.skip('should success return vf function rows 1 - 1', async () => {
        const {data, rows} = smashString(' xxo ox  ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it.skip('should success return vf function rows 1 - 2', async () => {
        const {data, rows} = smashString(' xxoo x  ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it.skip('should success return vf function colum 0 - 0', async () => {
        const {data, rows} = smashString(' xxo  o  ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it.skip('should success return vf function colum 0 - 1', async () => {
        const {data, rows} = smashString('oxx   o  ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it.skip('should success return vf function colum 0 - 2', async () => {
        const {data, rows} = smashString('oxxo   xx')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it.skip('should success return vf function diagonals 2 - 2', async () => {
        const {data, rows} = smashString('oxxx ox  ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })

    it.skip('should success return vf function diagonals 0 - 0', async () => {
        const {data, rows} = smashString(' xxx xx o')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })
    
    it.skip('should success return vf function diagonals 2 - 0', async () => {
        const {data, rows} = smashString('xxoo x xx')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })

    it.skip('should success return vf function diagonals 2 - 2', async () => {
        const {data, rows} = smashString('oxxx x  ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })

    it.skip('should success return vf function diagonals 0 - 0', async () => {
        const {data, rows} = smashString(' xxxo xo')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })

    it.skip('should success return vf function diagonals 2 - 0', async () => {
        const {data, rows} = smashString('oxxxo x  ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })

    it.skip('should success return vf function diagonals 0 - 2', async () => {
        const {data, rows} = smashString('xx xo o x')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })


    it('should success return vf function diagonals', async () => {
        const {data, rows} = smashString('xoxoxx  x')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows.error).toBe('No search best move')
    })

    it.skip('should error return vf you loser', async () => {
        const {data, rows} = smashString('o  xo xxx ')
        const responseRows = await checkBestMove(data, rows)
        expect(responseRows.status).toBe(400)
        expect(responseRows.message).toBe('You Lose!')
    })

})