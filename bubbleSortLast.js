const BubbleSort = (nums) => {
  let noSwap;
  for (let i = nums.length - 1; i >= 0; i--) {    //  BIR MARTA AYLANGAN ENG KATTASINI OXIRIGA OBORADI  va shuning uchun keyingi safar arr.length - 1 bo'laddi
    noSwap = true;
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        noSwap = false;
      }
    }
    console.log("bitta aylanish");

    if (noSwap) break;
  }
  return nums;
};

console.log(BubbleSort([2, 13, 4, 5, 67, 899, 21, 33]));
