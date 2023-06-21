const  string  = require("./stringFunctions");

describe("This function should reverse your string",()=>{
    test("reverseString('hello')=>olleh",()=>{
        expect(string.reverseString("hello")).toBe("olleh")
    })

    test("reverseString('I went to the zoo')=>ooz eht ot tnew I",()=>{
        expect(string.reverseString("I went to the zoo")).toBe("ooz eht ot tnew I")
    })
})
describe("isPalindrome should return true if a string is the same normally and reversed ",()=>{
    test("isPalindrome(hello)=>false",()=>{
        expect(string.isPalindrome('hello')).toBe(false)
    })
    test("isPalindrome(amA)=>true",()=>{
        expect(string.isPalindrome('amA')).toBe(true)
    })
    test("isPalindrome(A man, a plan, a canal: Panama!)=>true",()=>{
        expect(string.isPalindrome('A man, a plan, a canal: Panama!')).toBe(true)
    })

})
