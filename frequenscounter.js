function same(arr1) {
  let frequency_counter1 = {};

  for (let val of arr1) {
    frequency_counter1[val] = (frequency_counter1[val] || 0) + 1;
  }

  for (let key in frequency_counter1) {
    if (frequency_counter1[key] >= 2) return true;
  }
}

console.log(same([1, 2, 2, 3, 4]));
