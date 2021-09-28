const { bestColumMoves, smashString } = require('../../src/services')
describe('Test unit bestPlayerColum', () => {
    it.skip('should return success colum 1 0 - 0', () => {
        const board = ' xxo  o  '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('oxxo  o  ')
    })

    it('should return success colum 1 2 - 1', () => {
        const board = 'xoxo x   '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xoxo x o ')
    })

    it('should return success colum 2', () => {
        const board = 'xoxooxx  '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xoxooxxo ')
    })

    it('should return success colum 3', () => {
        const board = 'xx  xoo o'
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xxo xoo o')
    })

    it('should return error', () => {
        const board = '   '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp.error.message).toBe("Cannot read property 'filter' of undefined")
    })
})