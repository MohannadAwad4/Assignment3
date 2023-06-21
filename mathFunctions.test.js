const math=require("./mathFunctions")

describe("this function should add the sum of two intergers",()=>{
test("add(1,3)=>3",()=>{
expect(math.add(1,3)).toBe(4)
})
test ("add(0,0)=>0", ()=>{
    expect(math.add(0,0)).toBe(0);
})
test ("subtract(5,6)=>-1", ()=>{
    expect(math.subtract(5,6)).toBe(-1);
})
test ("subtract(10,5)=>5", ()=>{
    expect(math.subtract(10,5)).toBe(5);
})
test ("divide(10,5)=>2", ()=>{
    expect(math.divide(10,5)).toBe(2);
})
test ("divide(2,0)=>2", ()=>{
    expect(math.divide(2,0)).toBe(null);
})
test ("multiply(2,0)=>2", ()=>{
    expect(math.multiply(2,0)).toBe(0);
})
test ("multiply(2,8)=>16", ()=>{
    expect(math.multiply(2,8)).toBe(16);
})

})
