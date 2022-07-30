const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        let arrayCheck = [' ']
    expect(typeof shuffleArray).not.toBe('string')
    })
    
    test("shuffleArray should return an array" , () => {
        expect([shuffleArray]).toContainEqual(shuffleArray)
    
    }) ; 
})