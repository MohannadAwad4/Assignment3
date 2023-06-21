function reverseString(str){
    let arr=[]
    
    for(let i=str.length-1;i>=0;i--){
        arr.push(str[i])
    }
    let newString= arr.join("")
    return newString
    

}

function isPalindrome(str){
    let newString=str.replace(/[^A-Za-z0-9]/g,"")
    newString=newString.toLowerCase();
    console.log(newString)
    for(let i=0;i<newString.length;i++){
        if(newString[i]!==newString[newString.length-1-i]){
            return false
        }
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama!"));



module.exports={reverseString,isPalindrome};