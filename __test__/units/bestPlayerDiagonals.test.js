const { bestPlayerDiagonals, smashString } = require('../../src/services')
describe('Test unit bestPlayerColum', () => {
    it('should return success', () => {
        const board = 'ox  oxxo '
        const { rows } = smashString(board)
        const resp = bestPlayerDiagonals(rows)
        expect(resp).toBe('ox  oxxoo')
    })

    it('should return success', () => {
        const board = 'xxo ox  x'
        const { rows } = smashString(board)
        const resp = bestPlayerDiagonals(rows)
        expect(resp).toBe('xxo oxo x')
    })


    it('should return success', () => {
        const board = 'xx  oxo  x'
        const { rows } = smashString(board)
        const resp = bestPlayerDiagonals(rows)
        expect(resp).toBe('xxo oxo  x')
    })

    it('should return success', () => {
        const board = ' xx oxx o'
        const { rows } = smashString(board)
        const resp = bestPlayerDiagonals(rows)
        expect(resp).toBe('oxx oxx o')
    })

    it('should return success', () => {
        const board = 'o xx o x '
        const { rows } = smashString(board)
        const resp = bestPlayerDiagonals(rows)
        expect(resp).toBe('o xxoo x ')
    })
   

    it('should return error', () => {
        const board = '   '
        const { rows } = smashString(board)
        const resp = bestPlayerDiagonals(rows)
        expect(resp.error.message).toBe("Cannot read property '1' of undefined")
    })
})