const Selectionsort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < nums.length; j++) {
      //   console.log(lowest, j);
      if (nums[j] < nums[lowest]) {
        lowest = j;
        console.log(lowest);
      }
    }
    if (lowest != i) {
      let temp = nums[lowest];
      nums[lowest] = nums[i];
      nums[i] = temp;
    }
  }
  return nums;
};

Selectionsort([23, 42, 11, 45, 67, 32]);
