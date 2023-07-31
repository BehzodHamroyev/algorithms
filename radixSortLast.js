const getDigit = (num, place) => {
  let arr = num.toString().split("");
  return arr.reverse()[place - 1];
};

getDigit(1234, 1);

const digitcount = (num) => {
  return Math.abs(num).toString().length;
};

// console.log(digitcount(-12414));

const digitMost = (nums) => {
  let max = digitcount(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (digitcount(max) <= digitcount(nums[i])) max = nums[i];
  }
  console.log(digitcount(max));
  return digitcount(max);
};

digitMost([-131, 32323, 4, 35, 653365]);

const RadixSort = (nums) => {
let lengthOfMaxNum=digitMost(nums)
    



};

// RedixSort([123423, 424, 2313454, 23432, 556, 12]);
