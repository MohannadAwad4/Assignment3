const map={}
const arr=[2,7,11,15]




function twoSums(arr,target){
    const arr2=[]
    
    for( i of arr){
        let num=target-i;
        if(num in map){
            arr2.push(arr.indexOf(num),arr.indexOf(i))
            
            
            return arr2
        }
        else{
            map[i]=1
        }
    }
    return false
}
console.log(twoSums(arr,9))
module.exports=twoSums;