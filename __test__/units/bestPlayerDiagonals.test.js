const { bestDiagonalsMoves, smashString } = require('../../src/services')
describe('Test unit bestPlayerColum', () => {
    it('should return success 2 - 2', () => {
        const board = 'ox  oxxo '
        const { rows } = smashString(board)
        const resp = bestDiagonalsMoves(rows)
        expect(resp).toBe('ox  oxxoo')
    })

    it('should return success 2 - 0', () => {
        const board = 'xxo ox  x'
        const { rows } = smashString(board)
        const resp = bestDiagonalsMoves(rows)
        expect(resp).toBe('xxo oxo x')
    })


    it('should return success 0 - 2', () => {
        const board = 'xx  oxo x'
        const { rows } = smashString(board)
        const resp = bestDiagonalsMoves(rows)
        expect(resp).toBe('xxo oxo x')
    })

    it('should return success 0 - 0', () => {
        const board = ' xx oxx o'
        const { rows } = smashString(board)
        const resp = bestDiagonalsMoves(rows)
        expect(resp).toBe('oxx oxx o')
    })

    it('should return success 0 - 0 with space in the middle', () => {
        const board = ' xxx xx o'
        const { rows } = smashString(board)
        const resp = bestDiagonalsMoves(rows)
        expect(resp).toBe('oxxx xx o')
    })

    it('should return success 2 - 0 with space in the middle', () => {
        const board = 'xxo  x x '
        const { rows } = smashString(board)
        const resp = bestDiagonalsMoves(rows)
        expect(resp).toBe('xxo  xox ')
    })

    it('should return success 0 - 2 with space in the middle', () => {
        const board = 'xx x ooxx'
        const { rows } = smashString(board)
        const resp = bestDiagonalsMoves(rows)
        expect(resp).toBe('xxox ooxx')
    })

    it('should return success 2 - 2 with space in the middle', () => {
        const board = 'oxxx  xo '
        const { rows } = smashString(board)
        const resp = bestDiagonalsMoves(rows)
        expect(resp).toBe('oxxx  xoo')
    })
   

    it('should return error', () => {
        const board = '   '
        const { rows } = smashString(board)
        const resp = bestDiagonalsMoves(rows)
        expect(resp.error.message).toBe("Cannot read property '1' of undefined")
    })
})