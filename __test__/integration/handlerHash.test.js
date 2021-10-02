const request = require('supertest')
const handlerHash = require('../../src/handler/handlerHash')

describe('Test Integration Handler Hash Column ', () => {
    it("should return success column 0 - 0", async () => {
        const board = ' xxo  o  '
        const move = await request(handlerHash.handler).get('/').query({ board: board})
        expect(move.body).toBe('oxxo  o  ')
    })

    it("should return success diagonals 2 - 2", async () => {
        const board = 'ox  oxxo '
        const move = await request(handlerHash.handler).get('/').query({ board: board})
        expect(move.body).toBe('ox  oxxoo')
    })

    it("should return success diagonals 0 - 2", async () => {
        const board = 'xx  oxo x'
        const move = await request(handlerHash.handler).get('/').query({ board: board})
        expect(move.body).toBe('xxo oxo x')
    })

    it("should return success rows 0 - 0", async () => {
        const board = ' oox  x  '
        const move = await request(handlerHash.handler).get('/').query({ board: board})
        expect(move.body).toBe('ooox  x  ')
    })

    it("should return success rows 2 - 2", async () => {
        const board = 'x xo xo  '
        const move = await request(handlerHash.handler).get('/').query({ board: board})
        expect(move.body).toBe('x xo xo o')
    })

    it("should return errors you lose", async () => {
        const board = 'xxxx   o '
        const move = await request(handlerHash.handler).get('/').query({ board: board})
        expect(move.body.message).toBe("You Lose!")
        expect(move.body.status).toBe(400)
    })

    it("should return error validation", async () => {
        const board = 'xxxx   o'
        const move = await request(handlerHash.handler).get('/').query({ board: board})
        expect(move.status).toBe(400)
        expect(move.body.details[0].message).toBe('"board" length must be at least 9 characters long')
    })

    it("should return error validation", async () => {
        const board = 'x x    x '
        const move = await request(handlerHash.handler).get('/').query({ board: board})
        console.log(move)
    })
    
})