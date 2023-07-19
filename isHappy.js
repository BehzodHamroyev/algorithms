var isHappy = (n) => {
  function helper(num) {
    let sum = 0;
    let arr = String(num).split("");
    for (let i = 0; i < arr.length; i++) {
      sum = sum + Math.pow(parseInt(arr[i]), 2);
    }
    if (String(sum).length > 1) {
      if (sum !== 1) {
        helper(sum);
      }
    } else if (sum !== 1) {
      return false;
    } else {
      return true;
    }
  }
  helper(n);
};

console.log(isHappy(234));
