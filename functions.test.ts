const {shuffleArray} = require('./utils')
let {arrCopy} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
    expect(typeof shuffleArray).not.toBe('string')
    })
    
    test("if shuffleArray returns same length" , () => {
        //let arrayCheck = [' ']
        expect(shuffleArray.length).toEqual(5)
    
    }) ; 
})