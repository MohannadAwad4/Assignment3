 const arr="bbbb"


const map = new Map();




function longestSub(arr){
let a =0;
let b =0;
let max =0;
let map=new Map();
while(b<arr.length){
    if(!map.has(arr[b])){
       map.set(arr[b],1);
       
       b++;
       
       max=Math.max(map.size,max);
       
    }
    else{
    map.delete(arr[a])
    a++;
    }
}
    return max
}

   
module.exports=longestSub