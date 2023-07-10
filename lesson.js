const addNumber=(n)=>{
    let tottal=0
 for(let i=1; i<=n; i++){
    tottal=i++;
 }
 return tottal
}
const t1=performance.now()
addNumber(100000)
const t2=performance.now()
console.log(t2-t1);
const addNumber1=(n)=>{
return n*(n+1)/2
}

const t12=performance.now()
addNumber1(100000)
const t22=performance.now()
console.log(t12);

const couter = (arr) => {
  let count = 0;
  for (let index = 0; index < arr; index++) {
    for (let j = 0; j <= index; j++) {
      count += j;
    }
  }
  return count
};
console.log(couter(10));

const sentence = "ghbnkm,";
const countChar = (sentence) => {
  const arr = sentence.split();
  const obj = new Object();

  for (let i = 0; i <= arr.length; i++) {
    const arrCount = [...arr];
    for (let j = 0; j <= arr.length; j++) {
      obj[arr[i]] = 0;
      if (arr[i] === arrCount[j]) {
        obj[arr[i]] += 1;
      }
    }
  }
  console.log(se);
  return obj
};

// countChar('sasasa')
function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] ? ++obj[char] : 1;
    }
  }
  return obj;
}
charCount('salom salom')
