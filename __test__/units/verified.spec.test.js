const { checkBestMove, smashString } = require('../../src/services/index')
describe('Test handlerHash units', () => {

    it('should success return vf function rows 0 - 0', () => {
        const { data, rows } = smashString(' oo x xox')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it('should success return vf function rows 0 - 1', () => {
        const { data, rows } = smashString('o o x xox')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it('should success return vf function rows 0 - 2', () => {
        const { data, rows } = smashString('oo x xox')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it('should success return vf function rows 1 - 0', () => {
        const { data, rows } = smashString(' xx oox  ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it('should success return vf function rows 1 - 1', () => {
        const { data, rows } = smashString(' xxo ox  ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })
    
    it('should success return vf function rows 1 - 2', () => {
        const { data, rows } = smashString(' xxoo x  ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it('should success return vf function rows 2 - 0', () => {
        const { data, rows } = smashString('x xoxx oo')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it('should success return vf function rows 2 - 1', () => {
        const { data, rows } = smashString('x xoxxo o')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it('should success return vf function rows 2 - 2', () => {
        const { data, rows } = smashString('x xoxxoo ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('rows')
    })

    it('should success return vf function colum 0 - 0', () => {
        const { data, rows } = smashString(' xxo  o  ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it('should success return vf function colum 0 - 1', () => {
        const { data, rows } = smashString('oxx   o  ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it('should success return vf function colum 0 - 2', () => {
        const { data, rows } = smashString('oxxo   xx')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it('should success return vf function colum 1 - 0', () => {
        const { data, rows } = smashString('x x oxxo ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it('should success return vf function colum 1 - 1', () => {
        const { data, rows } = smashString('xox  xxo ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it('should success return vf function colum 1 - 2', () => {
        const { data, rows } = smashString('xox o x  ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it('should success return vf function colum 2 - 0', () => {
        const { data, rows } = smashString('xx x o  o')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it('should success return vf function colum 2 - 1', () => {
        const { data, rows } = smashString('xxox    o')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it('should success return vf function colum 2 - 2', () => {
        const { data, rows } = smashString('xxox o   ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('colum')
    })

    it('should success return vf function diagonals 2 - 2', () => {
        const { data, rows } = smashString('oxxx ox  ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })

    it('should success return vf function diagonals 0 - 0', () => {
        const { data, rows } = smashString(' xxx xx o')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })

    it('should success return vf function diagonals 2 - 0', () => {
        const { data, rows } = smashString('xxoo x xx')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })

    it('should success return vf function diagonals 2 - 2', () => {
        const { data, rows } = smashString('oxxx x x  ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })

    it('should success return vf function diagonals 2 - 0', () => {
        const { data, rows } = smashString('oxxxo x  ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })

    it('should success return vf function diagonals 0 - 2', () => {
        const { data, rows } = smashString('xx xo o x')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows).toBe('diagonals')
    })


    it('should success return vf function diagonals', () => {
        const { data, rows } = smashString('xoxoxx   ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows.error).toBe('No search best move on diagonals')
    })

    it('should error return vf you loser', () => {
        const { data, rows } = smashString('o  xo xxx ')
        const responseRows = checkBestMove(data, rows)
        expect(responseRows.status).toBe(400)
        expect(responseRows.message).toBe('You Lose!')
    })

})