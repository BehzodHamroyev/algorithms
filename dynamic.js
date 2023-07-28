// const fibanachi = (n, memo = {}) => {
//   if (n <= 2) return 1;

//   if (memo[n]) {
//     return memo[n];
//   }

//   memo[n] = fibanachi(n - 1, memo) + fibanachi(n - 2, memo);
//   return memo[n];
// };

// // console.log(fibanachi(30));

// const recurFunc = (n) => {
//   if (n <= 2) return 1;
//   let recur = [0, 1, 1];

//   for (let i = 3; i <=n; i++) {
//     recur[i] = recur[i - 1] + recur[i - 2];
//   }
//   return recur[n];
// };

// console.log(recurFunc(500));



var PredictTheWinner = function(nums) {
  if(nums.length===1) return true
  let sumOfPlayer1=0,sumOfPlayer2=0,winner=true;
  for(let i=0; i<nums.length; i++){
      if(i%2==0){
        console.log(i);
          sumOfPlayer1+=nums[i]
      }else{
          sumOfPlayer2+=nums[i]
      }
  }

  console.log(sumOfPlayer1,sumOfPlayer2)
  if(sumOfPlayer1>sumOfPlayer2) return true
  else return false

};


PredictTheWinner([1,1,1])

