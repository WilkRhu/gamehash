const { bestRowsMoves, smashString } = require('../../src/services')
describe('Test unit bestPlayerRows', () => {
    it('should return success', () => {
        const board = ' oox  x  '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('ooox  x  ')
    })

    it('should return error', () => {
        const board = '   '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp.error.message).toBe("Cannot read property 'indexOf' of undefined")
    })
})