// const sameFrequency = (num1, num2) => {
//   let numStr1 = toString(num1);
//   let numStr2 = toString(num2);
//   if (numStr1.length !== numStr2.length) {
//     return null;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let i = 0; i < numStr1.length - 1; i++) {
//     let letter = numStr1[i];
//     frequencyCounter1[letter]
//       ? (frequencyCounter1[letter] += 1)
//       : (frequencyCounter1[letter] = 1);
//       console.log(frequencyCounter1);

//   }
//   for (let i = 0; i < numStr2.length - 1; i++) {
//     let letter = numStr2[i];
//     if (!frequencyCounter1[letter]) {
//       return false;
//     } else {
//       frequencyCounter1[letter] -= 1;
//     }
//   }
//   return true;
// };
// console.log(sameFrequency(121, 234));

// const areThereDublicate = (...nums) => {
//   console.log(nums);
//   let fr = {};
//   for (let i = 0; i <= nums.length - 1; i++) {
//     fr[nums[i]] ? (fr[nums[i]] += 1) : (fr[nums[i]] = 0);
//   }
//   for (let key in fr) {
//     if (fr[key] >1) {
//       return true;
//     }
//   }
// };
// console.log(areThereDublicate(2, 4, 5, 2));

// const averagePair = (arr, halfSum) => {
//   let start = 0;
//   let end = arr.length - 1;
//   while (end > start) {
//     let sum = arr[start] + arr[end];
//     if (halfSum > sum / 2) {
//       start += 1;
//     } else if (halfSum * 2 < sum) {
//       end -= 1;
//     } else {
//       return true;
//     }
//   }
//   return false
// };
// console.log(averagePair([1, 2, 3], 2.5));
// // averagePair([1, 2, 3], 2.5);
// console.log(typeof 2)

// var isSubsequence = function (str1, text) {
//   let min = 0;
//   let max = 0;
//   if (text.length == 0) {
//     return str1 == "" ? true : false;
//   }
//   while (min <= max) {
//     if (str1[min] == text[max]) {
//       min++;
//     }
//     if (min > str1.length - 1) {
//       return true;
//     }
//     if (max == text.length - 1) {
//       return false;
//     }
//     max++;
//   }
//   return true;
// };
// isSubsequence("asd", "edw");

// const maxWindowSum = (arr, n) => {
//   let maxSum = 0;
//   let tempSum = 0;

//   for (let i = 0; i < n; i++) {
//     maxSum += arr[i];
//   }

//   tempSum = maxSum;
//   for (let i = n; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - n] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// };
// console.log(maxWindowSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

// function minSubArrayLen(arr, target) {
//   let minLength = Infinity;
//   let start = 0;
//   let end = 0;
//   let sum = 0;

//   while (start < arr.length) {
//     if (sum < target && end < arr.length) {
//       sum += arr[end];
//       end++;
//     } else if (sum >= target) {
//       minLength = Math.min(minLength, end - start);
//       sum -= arr[start];
//       start++;
//     } else {
//       break;
//     }
//   }

//   return minLength === Infinity ? 0 : minLength;
// }

// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));

// const counterLetter = (str) => {
//   let arr = str.split("");
//   let count = 0;
//   let frequencyCounter1 = {};
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (frequencyCounter1[arr[i]]) {
//       return count;
//     } else {
//       frequencyCounter1[arr[i]] += 1;
//       count++;
//     }
//   }
//   console.log(count);
// };
// counterLetter('rithmschool')

// const recursive = (n) => {
//   let count = `${n} marta salom berdik`;
//   if (n <= 0) {
//     console.log(count);
//     return;
//   } else {
//     n = n - 1;
//     console.log("salom");
//   }
//   recursive(10);
// };
// const sumRange = (n) => {
//   if (n == 1) return 1;
//   else return n + sumRange(n - 1);
// };
// const sum2 = (n) => {
//   let s = 0;
//   for (let index = 0; index < n; index++) {
//     s += index;
//   }
//   console.log(s);
// };
// // console.log(sumRange(10));
// t1 = performance.now();
// sumRange(10);
// t2 = performance.now();

// console.log(t2 - t1);
// const factarial = (n) => {
//   if (n == 1) return 1;
//   else return n * factarial(n - 1);
// };

// console.log(factarial(3));

// const oddArr = (arr) => {
//   let result = [];
//   const helper = (input) => {
//     if (helperInput.length === 0) {
//       return 0;
//     }
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }

//     helper(helperInput.slice(1));
//   };
//   helper(arr);
//   console.log(result, "resu;l");
// };
// oddArr([1, 2, 3, 4, 5, 6, 6, 7, 8, 9]);
// const pow = (n, m) => {
//   if (m === 1) return n;
//   else return n * pow(n, m - 1);
// };
// console.log(pow(3, 3));

// const ko = (arr) => {
//   let t = 1;
//   if (arr.length <= 0) return t;
//   else {
//     ar
//   }
// };
// const arifmetic = (n) => {
//   let s = ((1 + n) / 2) * n;
//   return s;
// };
// lo

const fib = (n) => {
  if (n <= 2) return 1;
  else fib(n - 1) + fib(n - 2);
};
