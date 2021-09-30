const { bestColumMoves, smashString } = require('../../src/services')
describe('Test unit bestPlayerColum', () => {
    it('should return success colum 0 - 0', () => {
        const board = ' xxo  o  '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('oxxo  o  ')
    })

    it('should return success colum 0 - 1', () => {
        const board = 'oxx   o  '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('oxxo  o  ')
    })

    it('should return success colum 0 - 2', () => {
        const board = 'oxxo   xx'
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('oxxo  oxx')
    })

    it('should return success colum 1 - 0', () => {
        const board = 'x x oxxo '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xox oxxo ')
    })

    it('should return success colum 1 - 1', () => {
        const board = 'xoxo x   '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xoxo x o ')
    })

    it('should return success colum 1 - 2', () => {
        const board = 'xox o x  '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xox o xo ')
    })

    it('should return success colum 2 - 0', () => {
        const board = 'xx x o  o'
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xxox o  o')
    })

    it('should return success colum 2 - 1', () => {
        const board = 'xxox    o'
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xxox o  o')
    })

    it('should return success colum 2 - 2', () => {
        const board = 'xxox o   '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xxox o  o')
    })
    

    it('should return error', () => {
        const board = '   '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp.error.message).toBe("Cannot read property 'filter' of undefined")
    })
})