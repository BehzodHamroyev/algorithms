const getDigit = (num, lastIndex) => {
  return Math.floor(Math.abs(num) / Math.pow(10, lastIndex)) % 10;
};
// console.log(getDigit(12345,3));
const countDigit=(num)=>{
    var length= num.toString()?.length
    return length
}

const mostDigit=(arr)=>{
let max= Math.max(arr)
let length=max.toString()?.length
return length
}
// console.log(mostDigit(1233,5,66));




const radixSort=(arr)=>{
    const maxDigite=mostDigit(arr);
    for(let i=0; i<maxDigite;i++){
        let bucketDigit=Array.from({length:10},()=>[]);
        for( let j=0; j<arr.length; j++){
            let digit=getDigit(arr[j],i);
            bucketDigit[digit].push(arr[j])
        }
        arr=[].concat(...bucketDigit)
    }
    return arr
}
console.log(radixSort([3,52,1,454364,56,2324,]));