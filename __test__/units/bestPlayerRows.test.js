const { bestRowsMoves, smashString } = require('../../src/services')
describe('Test unit bestPlayerRows', () => {
    it('should return success row 0 - 0', () => {
        const board = ' oox  x  '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('ooox  x  ')
    })

    it('should return success row 0 - 1', () => {
        const board = 'o ox  x  '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('ooox  x  ')
    })

    it('should return success row 0 - 2', () => {
        const board = 'oo x  x  '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('ooox  x  ')
    })

    it('should return success row  1 - 1', () => {
        const board = 'xx o ox  '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('xx ooox  ')
    })

    it('should return success row  1 - 2', () => {
        const board = 'xx o  x  '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('xx o ox  ')
    })
    
    it('should return success row 2 - 0', () => {
        const board = 'xx ox  o'
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('xx ox oo')
    })

    it('should return success row 2 - 1', () => {
        const board = 'xx ox o o'
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('xx ox ooo')
    })

    it('should return success row 2 - 2', () => {
        const board = 'x xo xo  '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('x xo xo o')
    })

    it('should return success row 1 0 - 1', () => {
        const board = 'o oxx  o '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('oooxx  o ')
    })

    it('should return success row 1 0 - 2', () => {
        const board = 'oo x o o '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('ooox o o ')
    })

    it('should return success row 2 1 - 0', () => {
        const board = 'xx  oox  '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('xx ooox  ')
    })

    it('should return success row 2 1 - 1', () => {
        const board = 'xx o oxx '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('xx oooxx ')
    })

    it('should return success row 2 1 - 2', () => {
        const board = 'xx oo xx '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp).toBe('xx oooxx ')
    })


    it('should return error', () => {
        const board = '   '
        const {rows} = smashString(board)
        const resp = bestRowsMoves(rows)
        expect(resp.error.message).toBe("Cannot read property 'filter' of undefined")
    })
})