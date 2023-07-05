const maxSubarraySum = (arr, num) => {
  if (arr.length < num) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};
console.log(maxSubarraySum([4, 2, 1, 6,2], 4));
