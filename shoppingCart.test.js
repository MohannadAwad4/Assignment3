const shopping=require("./shoppingCart");
describe("add to object",()=> {
    test("add to object",()=>{
        expect(shopping.addToCart("hi",2,20)).toBe(shopping.object); // []
    })
    })
    describe("add to object",()=> {
        test("add to object",()=>{
            expect(shopping.removeFromCart("hi",1,20)).toBe(shopping.object); // []
        })
        })
        describe("calculateTotal return all items costs",()=> {
            test("calculateTotal =>40",()=>{
                expect(shopping.calculateTotal()).toBe(20); // []
            })
            })