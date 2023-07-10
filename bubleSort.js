var arrs = [5, 3, 4, 1, 2];

const bubleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    var swaps = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaps = true;
      }
      //   console.log(arr);
    }
    if (!swaps) break;
  }
  console.log(arr);
};
bubleSort(arrs);
