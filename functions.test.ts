const {shuffleArray} = require('./utils')
let randomArr = [1,2,3,4,5,6]
console.log(shuffleArray)
describe('shuffleArray should', () => {
    test("to shuffle the array",()=>{
        expect(randomArr).not.toEqual(shuffleArray(randomArr))
    })
    test("to make sure all the items are still in the array",()=>{
        expect(shuffleArray(randomArr).length).toEqual(randomArr.length)
    })
})