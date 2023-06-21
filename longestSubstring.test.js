const longestSub = require("./longestSubstring")

describe("this fucntion will find the longest substring without repeating",()=>{
    test("longestSub('abcabcbb')=>3",()=>{
        expect(longestSub('abcabcbb')).toBe(3)
    })

    test("longestSub('bbbb')=>1",()=>{
        expect(longestSub('bbbb')).toBe(1)
    })

    test("longestSub('pwwkew')=>3",()=>{
        expect(longestSub('pwwkew')).toBe(3)
    })
})