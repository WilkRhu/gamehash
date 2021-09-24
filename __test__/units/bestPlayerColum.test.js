const { bestColumMoves, smashString } = require('../../src/services')
describe('Test unit bestPlayerColum', () => {
    it('should return success colum 1 0 - 0', () => {
        const board = ' xxo  o  '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('oxxo  o  ')
    })

    it('should return success colum 1 0 - 1', () => {
        const board = 'oxx xoo  '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('oxxoxoo  ')
    })

    it('should return success colum 1 0 - 2', () => {
        const board = 'oxxox   x'
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('oxxox o x')
    })

    it('should return success colum 2 1 - 0', () => {
        const board = 'x xooxxo '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xoxooxxo ')
    })

    it('should return success colum 2 1 - 1', () => {
        const board = 'xoxo xxo '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xoxooxxo ')
    })

    it('should return success colum 2 1 - 2', () => {
        const board = 'xoxooxx  '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xoxooxxo ')
    })

    it('should return success colum 3 2 - 0', () => {
        const board = 'xx xoo xo'
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xxoxoo xo')
    })

    it('should return success colum 3 2 - 1', () => {
        const board = 'xxo o xxo'
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xxo ooxxo')
    })

    it('should return success colum 3 2 - 2', () => {
        const board = 'xxoxooxx '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp).toBe('xxoxooxxo')
    })

    it('should return error', () => {
        const board = '   '
        const {data, rows} = smashString(board)
        const resp = bestColumMoves(data, rows)
        expect(resp.error.message).toBe("Cannot read property 'indexOf' of undefined")
    })
})