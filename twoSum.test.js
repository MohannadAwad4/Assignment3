


const twoSums=require("./twoSum");

describe("This function should find two elements in an array that add up to the target ",()=>{
    test("twoSums([2,7,11,15],9)) => [0,1]",()=>{
        expect(twoSums([2,7,11,15],9)).toEqual([0,1])
    })
    test("twoSums([3,2,4],6)) => [1,2]",()=>{
        expect(twoSums([3,2,4],6)).toEqual([1,2])
    })
    test("twoSums([-1,-2,-3,-4,-5],-8)) => [1,2]",()=>{
        expect(twoSums([-1,-2,-3,-4,-5],-8)).toEqual([2,4])
    })
})